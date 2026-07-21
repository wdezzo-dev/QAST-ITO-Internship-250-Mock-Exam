import React from "react";
import { 
  BookOpen, 
  Clock, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Flag, 
  AlertCircle, 
  HelpCircle, 
  Check, 
  X, 
  RotateCcw, 
  Sparkles, 
  CheckCircle, 
  Play, 
  Home, 
  ListCollapse, 
  Trophy,
  Undo2,
  Trash2,
  GraduationCap
} from "lucide-react";
import { MOCK_QUESTIONS, SECTIONS, SECTION_QUESTIONS_RANGE } from "./questions";
import { Question, ExamResults } from "./types";
import Introduction from "./components/Introduction";
import Results from "./components/Results";
import ReviewMode from "./components/ReviewMode";

// Local storage keys
const STATE_LOCAL_STORAGE_KEY = "qast_internship_exam_progress_v1";
const HIGH_SCORE_STORAGE_KEY = "qast_internship_exam_highscore_v1";

interface SavedExamState {
  settings: {
    mode: "exam" | "study";
    timed: boolean;
    timeLimit: number;
    scope: "all" | "section";
    selectedSection: string;
    questionCountType: "all" | "custom";
    customCount: number;
  };
  activeQuestionIds: number[];
  userAnswers: { [questionId: number]: string };
  flaggedQuestions: number[];
  currentQuestionIndex: number;
  timeLeft: number;
  timeTaken: number;
}

// Helper function to generate questions for the exam based on configuration
function generateQuestionsForExam(
  scope: "all" | "section",
  selectedSection: string,
  questionCountType: "all" | "custom",
  customCount: number
): Question[] {
  let pool = MOCK_QUESTIONS;
  if (scope === "section") {
    pool = MOCK_QUESTIONS.filter(q => q.section === selectedSection);
  }

  if (questionCountType === "all") {
    return [...pool].sort(() => Math.random() - 0.5);
  }

  const count = Math.min(customCount, pool.length);

  if (scope === "section") {
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  } else {
    const sections = SECTIONS;
    const questionsBySection: { [section: string]: Question[] } = {};
    sections.forEach(sec => {
      questionsBySection[sec] = MOCK_QUESTIONS.filter(q => q.section === sec);
    });

    const basePerSection = Math.floor(count / sections.length);
    let remainder = count % sections.length;

    let selected: Question[] = [];
    const shuffledSections = [...sections].sort(() => Math.random() - 0.5);

    sections.forEach(sec => {
      const sectionPool = questionsBySection[sec];
      const isExtra = remainder > 0 && shuffledSections.slice(0, remainder).includes(sec);
      const sectionCount = basePerSection + (isExtra ? 1 : 0);

      const shuffled = [...sectionPool].sort(() => Math.random() - 0.5);
      selected = [...selected, ...shuffled.slice(0, sectionCount)];
    });

    return selected.sort(() => Math.random() - 0.5);
  }
}

export default function App() {
  // Navigation & Screen View
  const [view, setView] = React.useState<"intro" | "exam" | "results" | "review">("intro");
  
  // Settings State
  const [settings, setSettings] = React.useState<{
    mode: "exam" | "study";
    timed: boolean;
    timeLimit: number;
    scope: "all" | "section";
    selectedSection: string;
    questionCountType: "all" | "custom";
    customCount: number;
  }>({
    mode: "exam",
    timed: true,
    timeLimit: 180,
    scope: "all",
    selectedSection: SECTIONS[0],
    questionCountType: "all",
    customCount: 30
  });

  // Test Taking State
  const [activeQuestions, setActiveQuestions] = React.useState<Question[]>(MOCK_QUESTIONS);
  const [userAnswers, setUserAnswers] = React.useState<{ [questionId: number]: string }>({});
  const [flaggedQuestions, setFlaggedQuestions] = React.useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState<number>(0);
  const [timeLeft, setTimeLeft] = React.useState<number>(3600); // in seconds
  const [timeTaken, setTimeTaken] = React.useState<number>(0); // in seconds
  const [isTimerRunning, setIsTimerRunning] = React.useState<boolean>(false);

  // Saved Results state
  const [results, setResults] = React.useState<ExamResults | null>(null);
  const [reviewFilter, setReviewFilter] = React.useState<"all" | "mistakes" | "correct">("all");

  // Local storage state checks
  const [savedStateExists, setSavedStateExists] = React.useState<boolean>(false);
  const [personalBest, setPersonalBest] = React.useState<{ score: number; percentage: number } | null>(null);

  // Sidebar display toggle
  const [showSidebar, setShowSidebar] = React.useState<boolean>(true);
  const [showSubmitConfirm, setShowSubmitConfirm] = React.useState<boolean>(false);
  const [showExitConfirm, setShowExitConfirm] = React.useState<boolean>(false);
  const [showMobileGrid, setShowMobileGrid] = React.useState<boolean>(false);

  // Load high score and check for saved states on mount
  React.useEffect(() => {
    // Check saved exam state
    const saved = localStorage.getItem(STATE_LOCAL_STORAGE_KEY);
    if (saved) {
      setSavedStateExists(true);
    }

    // Load High Score
    const savedHighScore = localStorage.getItem(HIGH_SCORE_STORAGE_KEY);
    if (savedHighScore) {
      try {
        setPersonalBest(JSON.parse(savedHighScore));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  // Save current progress on every action
  React.useEffect(() => {
    if (view === "exam") {
      const stateToSave: SavedExamState = {
        settings,
        activeQuestionIds: activeQuestions.map(q => q.id),
        userAnswers,
        flaggedQuestions,
        currentQuestionIndex,
        timeLeft,
        timeTaken
      };
      localStorage.setItem(STATE_LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
      setSavedStateExists(true);
    }
  }, [userAnswers, flaggedQuestions, currentQuestionIndex, timeLeft, timeTaken, settings, view, activeQuestions]);

  // Timer Interval Hook
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (view === "exam" && isTimerRunning) {
      interval = setInterval(() => {
        setTimeTaken((prev) => prev + 1);
        if (settings.timed) {
          setTimeLeft((prev) => {
            if (prev <= 1) {
              // Time expired! Auto submit
              if (interval) clearInterval(interval);
              setIsTimerRunning(false);
              handleSubmitExam(true); // force submit
              return 0;
            }
            return prev - 1;
          });
        }
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [view, isTimerRunning, settings.timed]);

  // Handle starting exam with fresh settings
  const handleStartExam = (newSettings: {
    mode: "exam" | "study";
    timed: boolean;
    timeLimit: number;
    scope: "all" | "section";
    selectedSection: string;
    questionCountType: "all" | "custom";
    customCount: number;
  }) => {
    const examQuestions = generateQuestionsForExam(
      newSettings.scope,
      newSettings.selectedSection,
      newSettings.questionCountType,
      newSettings.customCount
    );

    setSettings(newSettings);
    setActiveQuestions(examQuestions);
    setUserAnswers({});
    setFlaggedQuestions([]);
    setCurrentQuestionIndex(0);
    setTimeTaken(0);
    setTimeLeft(newSettings.timeLimit * 60);
    setIsTimerRunning(true);
    setView("exam");
    setResults(null);
  };

  // Load previous progress
  const handleLoadSavedState = () => {
    const saved = localStorage.getItem(STATE_LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed: SavedExamState = JSON.parse(saved);
        setSettings(parsed.settings);
        setUserAnswers(parsed.userAnswers);
        setFlaggedQuestions(parsed.flaggedQuestions || []);
        
        if (parsed.activeQuestionIds && parsed.activeQuestionIds.length > 0) {
          const restored = parsed.activeQuestionIds
            .map(id => MOCK_QUESTIONS.find(q => q.id === id)!)
            .filter(Boolean);
          setActiveQuestions(restored);
        } else {
          setActiveQuestions(MOCK_QUESTIONS);
        }

        setCurrentQuestionIndex(parsed.currentQuestionIndex || 0);
        setTimeLeft(parsed.timeLeft);
        setTimeTaken(parsed.timeTaken || 0);
        setIsTimerRunning(true);
        setView("exam");
        setResults(null);
      } catch (e) {
        // failed parsing, reset
        handleClearSavedState();
      }
    }
  };

  // Clear saved exam progress
  const handleClearSavedState = () => {
    localStorage.removeItem(STATE_LOCAL_STORAGE_KEY);
    setSavedStateExists(false);
  };

  // Submit the exam & calculate final scores
  const handleSubmitExam = (forceSubmit: boolean = false) => {
    if (!forceSubmit && !showSubmitConfirm) {
      setShowSubmitConfirm(true);
      return;
    }

    setShowSubmitConfirm(false);
    setIsTimerRunning(false);

    // Calculate Scores
    let correctCount = 0;
    const sectionScores: { [sectionName: string]: { correct: number; total: number } } = {};

    // Pre-initialize sections
    SECTIONS.forEach((section) => {
      sectionScores[section] = { correct: 0, total: 0 };
    });

    activeQuestions.forEach((q) => {
      const userAnswer = userAnswers[q.id];
      const isCorrect = userAnswer === q.correctAnswer;

      // Update Section total count
      if (!sectionScores[q.section]) {
        sectionScores[q.section] = { correct: 0, total: 0 };
      }
      sectionScores[q.section].total += 1;

      if (isCorrect) {
        correctCount += 1;
        sectionScores[q.section].correct += 1;
      }
    });

    const finalResults: ExamResults = {
      score: correctCount,
      totalQuestions: activeQuestions.length,
      sectionScores,
      userAnswers,
      timeTaken: timeTaken
    };

    setResults(finalResults);
    setView("results");

    // Clean up temporary active progress
    handleClearSavedState();

    // High score check
    const currentPercent = Math.round((correctCount / activeQuestions.length) * 100);
    const savedHighScore = localStorage.getItem(HIGH_SCORE_STORAGE_KEY);
    let shouldUpdateHighScore = true;

    if (savedHighScore) {
      try {
        const parsed = JSON.parse(savedHighScore);
        if (parsed.percentage >= currentPercent) {
          shouldUpdateHighScore = false;
        }
      } catch (e) {
        // ignore
      }
    }

    if (shouldUpdateHighScore) {
      const newHighScore = { score: correctCount, percentage: currentPercent };
      localStorage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(newHighScore));
      setPersonalBest(newHighScore);
    }
  };

  // Reset/Restart entire quiz
  const handleRetakeAll = () => {
    handleStartExam({
      mode: settings.mode,
      timed: settings.timed,
      timeLimit: settings.timeLimit,
      scope: settings.scope,
      selectedSection: settings.selectedSection,
      questionCountType: settings.questionCountType,
      customCount: settings.customCount
    });
  };

  // Re-run incorrect questions only
  const handleRetakeIncorrect = () => {
    if (!results) return;

    // Filter only the questions that were missed in this session
    const incorrectQuestions = activeQuestions.filter((q) => {
      const ans = results.userAnswers[q.id];
      return ans !== q.correctAnswer;
    });

    setActiveQuestions([...incorrectQuestions].sort(() => Math.random() - 0.5));
    setUserAnswers({});
    setFlaggedQuestions([]);
    setCurrentQuestionIndex(0);
    setTimeTaken(0);
    setTimeLeft(settings.timeLimit * 60);
    setIsTimerRunning(true);
    setView("exam");
    setResults(null);
  };

  // Return to configuration home screen
  const handleGoHome = () => {
    setIsTimerRunning(false);
    setView("intro");
  };

  const handleViewReview = (filter: "all" | "mistakes" | "correct") => {
    setReviewFilter(filter);
    setView("review");
  };

  const currentQuestion = activeQuestions[currentQuestionIndex] || activeQuestions[0];
  const totalQuestionsCount = activeQuestions.length;
  const answeredCount = activeQuestions.filter((q) => !!userAnswers[q.id]).length;

  // Format time remaining
  const formatTimeRemaining = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Progress Percentage
  const progressPercent = Math.round((answeredCount / totalQuestionsCount) * 100);

  // Keyboard Shortcuts Hook
  React.useEffect(() => {
    if (view !== "exam" || !currentQuestion) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      const key = e.key.toLowerCase();

      // Check for numeric keys 1-4 or letters a-d
      const numMap: Record<string, number> = {
        "1": 0, "2": 1, "3": 2, "4": 3,
        "a": 0, "b": 1, "c": 2, "d": 3
      };

      if (key in numMap) {
        const optionIndex = numMap[key];
        const option = currentQuestion.options[optionIndex];
        if (option) {
          const isStudyMode = settings.mode === "study";
          const isAnsweredThisQ = !!userAnswers[currentQuestion.id];
          if (!(isStudyMode && isAnsweredThisQ)) {
            setUserAnswers(prev => ({
              ...prev,
              [currentQuestion.id]: option.key
            }));
          }
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        // Move to the next question if an answer has been selected for the current question
        const hasAnswer = !!userAnswers[currentQuestion.id];
        if (hasAnswer) {
          if (currentQuestionIndex < totalQuestionsCount - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            const qCard = document.getElementById("question-card");
            if (qCard) {
              qCard.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          } else {
            // Last question, open submission confirmation modal
            setShowSubmitConfirm(true);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [view, currentQuestion, userAnswers, currentQuestionIndex, totalQuestionsCount, settings.mode]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 flex flex-col font-sans" id="app-root">
      {/* Top Application Navbar */}
      <header className="bg-slate-900 border-b border-slate-850 py-4 px-6 shrink-0 sticky top-0 z-40 shadow-md" id="app-header">
        <div className="max-w-7xl mx-auto flex items-center justify-between" id="header-container">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-extrabold shadow-sm shadow-emerald-500/20" id="header-logo-container">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-black text-slate-100 tracking-tight" id="header-title">QAST IT DIVISION</span>
              <div className="hidden xs:block text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none mt-0.5">2026 ITO Practice Portal</div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Personal Best Tag */}
            {personalBest && (
              <div className="hidden sm:flex items-center gap-2 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-3 py-1.5 rounded-lg text-xs font-bold" id="header-pb-badge">
                <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                <span>Personal Best: {personalBest.score}/{totalQuestionsCount} ({personalBest.percentage}%)</span>
              </div>
            )}

            {/* Quick exit button if taking quiz */}
            {view === "exam" && (
              <button
                onClick={() => {
                  setShowExitConfirm(true);
                }}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg transition cursor-pointer shrink-0"
                id="header-quit-btn"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Exit Exam</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 overflow-y-auto" id="main-content-area">
        {/* VIEW 1: INTRODUCTION SCREEN */}
        {view === "intro" && (
          <Introduction
            onStart={handleStartExam}
            savedStateExists={savedStateExists}
            onLoadSaved={handleLoadSavedState}
            onClearSaved={handleClearSavedState}
          />
        )}

        {/* VIEW 2: ACTIVE EXAM SCREEN */}
        {view === "exam" && (
          <div className="max-w-7xl mx-auto px-4 py-6 md:py-8" id="active-exam-container">
            <div className="grid lg:grid-cols-12 gap-6 items-start" id="active-exam-grid">
              
              {/* Desktop Question Grid Side panel (LG and larger) */}
              {showSidebar && (
                <div className="hidden lg:flex lg:col-span-3 bg-slate-900 border border-slate-850 rounded-2xl p-5 shadow-lg sticky top-24 max-h-[80vh] overflow-y-auto flex-col justify-between" id="exam-sidebar">
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3" id="sidebar-header">
                      <h3 className="font-extrabold text-slate-100 text-sm flex items-center gap-1.5">
                        <ListCollapse className="w-4 h-4 text-slate-400" />
                        Question Board
                      </h3>
                      <span className="text-[11px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded-full" id="sidebar-progress">
                        {answeredCount} / {totalQuestionsCount} Done
                      </span>
                    </div>

                    {/* Progress visual line */}
                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden mb-5" id="sidebar-progress-bar">
                      <div 
                        style={{ width: `${progressPercent}%` }}
                        className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                        id="sidebar-progress-fill"
                      />
                    </div>

                    {/* Simple Instructions key */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-slate-500 mb-5 border-b border-slate-800 pb-3" id="sidebar-legend">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-slate-950 border border-slate-800 inline-block" />
                        <span>Unanswered</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600 inline-block" />
                        <span>Answered</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 inline-block" />
                        <span>Flagged</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm ring-2 ring-emerald-400 inline-block bg-slate-950" />
                        <span>Current</span>
                      </div>
                    </div>

                    {/* The Question Buttons Grid */}
                    <div className="grid grid-cols-5 gap-1.5" id="sidebar-question-buttons-grid">
                      {activeQuestions.map((q, idx) => {
                        const isCurrent = idx === currentQuestionIndex;
                        const isAnswered = !!userAnswers[q.id];
                        const isFlagged = flaggedQuestions.includes(q.id);

                        let btnStyle = "border-slate-800 text-slate-400 hover:border-slate-700 bg-slate-950";
                        if (isAnswered) {
                          btnStyle = "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-500";
                        }
                        if (isFlagged) {
                          // Flagged overrides answered color with amber warning styles
                          btnStyle = "bg-amber-500 text-slate-950 border-amber-500 hover:bg-amber-400";
                        }
                        if (isCurrent) {
                          // Current highlights with a sharp thick outer ring
                          btnStyle += " ring-3 ring-emerald-400 ring-offset-2 ring-offset-slate-900";
                        }

                        return (
                          <button
                            key={q.id}
                            onClick={() => setCurrentQuestionIndex(idx)}
                            className={`h-9 w-full rounded-lg text-xs font-black flex items-center justify-center transition cursor-pointer relative ${btnStyle}`}
                            id={`sidebar-q-btn-${q.id}`}
                            title={`Question ${idx + 1}`}
                          >
                            {idx + 1}
                            {isFlagged && isAnswered && (
                              <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-slate-950" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800" id="sidebar-footer">
                    <button
                      onClick={() => handleSubmitExam()}
                      className="w-full py-2.5 px-4 bg-slate-950 hover:bg-slate-900 text-slate-300 text-xs font-black rounded-xl border border-slate-800 shadow-sm transition cursor-pointer flex items-center justify-center gap-2"
                      id="sidebar-submit-btn"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Submit Exam Paper</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Main Active Question Frame */}
              <div className={`${showSidebar ? "lg:col-span-9" : "lg:col-span-12"} space-y-6`} id="exam-main-panel">
                {/* Active Exam Progress Header */}
                <div className="bg-slate-900 border border-slate-850 rounded-2xl p-4 md:p-6 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4" id="exam-status-card">
                  <div>
                    {/* Active Question's Section Header */}
                    <div className="text-xs font-black text-emerald-400 uppercase tracking-wider mb-1" id="exam-current-section-badge">
                      {currentQuestion.section}
                    </div>
                    <h2 className="text-sm font-bold text-slate-400" id="exam-range-badge">
                      Section Question Range: {SECTION_QUESTIONS_RANGE[currentQuestion.section]}
                    </h2>
                  </div>

                  {/* Timer & Controls Display */}
                  <div className="flex items-center gap-3 w-full md:w-auto shrink-0" id="exam-timer-block">
                    {/* Timer */}
                    {settings.timed ? (
                      <div
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-mono font-extrabold text-sm md:text-base ${
                          timeLeft < 300 
                            ? "bg-red-950/30 text-red-400 border-red-900/50 animate-pulse" 
                            : "bg-slate-950 text-slate-200 border-slate-800"
                        }`}
                        id="countdown-clock"
                      >
                        <Clock className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                        <span>{formatTimeRemaining(timeLeft)}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 font-mono text-xs font-extrabold" id="untimed-elapsed-clock">
                        <Clock className="w-4 h-4" />
                        <span>Practice Mode (Untimed)</span>
                      </div>
                    )}

                    {/* Sidebar Toggle Button */}
                    <button
                      onClick={() => setShowSidebar(!showSidebar)}
                      className="p-2.5 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 transition flex items-center justify-center gap-1.5 text-xs font-bold shrink-0 cursor-pointer"
                      id="toggle-sidebar-btn"
                    >
                      <ListCollapse className="w-4 h-4" />
                      <span className="hidden sm:inline">{showSidebar ? "Hide Grid" : "Show Grid"}</span>
                    </button>
                  </div>
                </div>

                {/* Question Details Area */}
                <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 md:p-8 shadow-md" id="question-card">
                  {/* Top line containing question number, flag icon */}
                  <div className="flex items-center justify-between mb-6" id="q-header-meta">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-black bg-slate-950 text-slate-300" id="q-id-indicator">
                      Question {currentQuestionIndex + 1} of {totalQuestionsCount}
                    </span>

                    <button
                      onClick={() => {
                        if (flaggedQuestions.includes(currentQuestion.id)) {
                          setFlaggedQuestions(flaggedQuestions.filter((id) => id !== currentQuestion.id));
                        } else {
                          setFlaggedQuestions([...flaggedQuestions, currentQuestion.id]);
                        }
                      }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border transition cursor-pointer ${
                        flaggedQuestions.includes(currentQuestion.id)
                          ? "bg-amber-500/10 text-amber-300 border-amber-500/20"
                          : "bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-300 hover:border-slate-700"
                      }`}
                      id="flag-question-btn"
                    >
                      <Flag className={`w-3.5 h-3.5 ${flaggedQuestions.includes(currentQuestion.id) ? "fill-current text-amber-500" : ""}`} />
                      <span>{flaggedQuestions.includes(currentQuestion.id) ? "Flagged for Review" : "Flag Question"}</span>
                    </button>
                  </div>

                  {/* Question Text */}
                  <h1 className="text-base md:text-xl font-bold text-slate-100 leading-snug mb-8" id="question-text">
                    {currentQuestion.text}
                  </h1>

                  {/* Answer Options list */}
                  <div className="space-y-3.5" id="question-options">
                    {currentQuestion.options.map((opt, idx) => {
                      const isSelected = userAnswers[currentQuestion.id] === opt.key;
                      
                      // Study mode extra highlighting variables
                      const isStudyMode = settings.mode === "study";
                      const isAnsweredThisQ = !!userAnswers[currentQuestion.id];
                      const isCorrectAnswerKey = opt.key === currentQuestion.correctAnswer;

                      let optStyle = "border-slate-800 hover:border-slate-700 bg-slate-950/50 hover:bg-slate-950 text-slate-300";
                      let badgeStyle = "bg-slate-800 text-slate-300";
                      let checkIcon = null;

                      if (isStudyMode && isAnsweredThisQ) {
                        // Under study mode, once answered, show red/green results immediately
                        if (isCorrectAnswerKey) {
                          optStyle = "border-emerald-500/50 bg-emerald-500/10 text-emerald-200 font-semibold ring-2 ring-emerald-500/10";
                          badgeStyle = "bg-emerald-600 text-white";
                          checkIcon = <Check className="w-5 h-5 text-emerald-400 shrink-0" />;
                        } else if (isSelected) {
                          // user's wrong choice
                          optStyle = "border-red-500/50 bg-red-500/10 text-red-200 font-semibold ring-2 ring-red-500/10";
                          badgeStyle = "bg-red-600 text-white";
                          checkIcon = <X className="w-5 h-5 text-red-400 shrink-0" />;
                        } else {
                          // other non-correct non-selected choices are grayed out
                          optStyle = "border-slate-900 bg-slate-950/10 text-slate-500 opacity-50";
                          badgeStyle = "bg-slate-900 text-slate-500";
                        }
                      } else if (isSelected) {
                        // Standard Selection style
                        optStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-200 font-semibold ring-2 ring-emerald-500/15";
                        badgeStyle = "bg-emerald-600 text-white";
                        checkIcon = <Check className="w-5 h-5 text-emerald-400 shrink-0" />;
                      }

                      return (
                        <button
                          key={opt.key}
                          type="button"
                          disabled={isStudyMode && isAnsweredThisQ} // Lock option selection in study mode once answered
                          onClick={() => {
                            setUserAnswers({
                              ...userAnswers,
                              [currentQuestion.id]: opt.key
                            });

                            // Auto-advance on phone/mobile (width < 768px) if not in study mode and not final question
                            const isMobile = window.innerWidth < 768;
                            const isFinalQuestion = currentQuestionIndex === totalQuestionsCount - 1;

                            if (isMobile && !isStudyMode && !isFinalQuestion) {
                              setTimeout(() => {
                                setCurrentQuestionIndex((prev) => Math.min(totalQuestionsCount - 1, prev + 1));
                                const qCard = document.getElementById("question-card");
                                if (qCard) {
                                  qCard.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                              }, 220);
                            }
                          }}
                          className={`w-full text-left p-4.5 rounded-xl border flex items-center justify-between gap-4 transition-all duration-200 ${
                            isStudyMode && isAnsweredThisQ ? "" : "cursor-pointer"
                          } ${optStyle}`}
                          id={`opt-btn-${opt.key}`}
                        >
                          <div className="flex items-start gap-4 flex-1">
                            <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-black shrink-0 mt-0.5 ${badgeStyle}`} id={`opt-key-${opt.key}`}>
                              {opt.key}
                            </span>
                            <span className="flex-1 leading-relaxed text-sm pt-0.5" id={`opt-text-${opt.key}`}>{opt.text}</span>
                          </div>

                          <div className="flex items-center gap-2.5 shrink-0">
                            {/* Desktop keyboard helper cap */}
                            {!(isStudyMode && isAnsweredThisQ) && (
                              <kbd className="hidden md:inline-flex items-center justify-center h-6 px-1.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono font-bold text-slate-500 opacity-70">
                                {idx + 1}
                              </kbd>
                            )}
                            {checkIcon}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Study Mode: Immediate Explanation display */}
                  {settings.mode === "study" && !!userAnswers[currentQuestion.id] && (
                    <div className="mt-8 p-5 rounded-xl bg-slate-950 border border-slate-850 animate-fade-in" id="study-explanation-block">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-slate-500" />
                        <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                          Instant Review & Explanation
                        </span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed font-medium">
                        <span className="font-bold text-slate-100">Correct Answer: {currentQuestion.correctAnswer}</span> — {currentQuestion.explanation}
                      </p>
                    </div>
                  )}
                </div>

                {/* Navigation and Submission Buttons Bar */}
                <div className="flex items-center justify-between gap-2 bg-slate-900 p-3 sm:p-4 border border-slate-850 rounded-2xl shadow-md" id="navigation-controls">
                  <div className="flex items-center gap-1.5">
                    {/* Previous Button */}
                    <button
                      onClick={() => {
                        setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
                        const qCard = document.getElementById("question-card");
                        if (qCard) qCard.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      disabled={currentQuestionIndex === 0}
                      className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-300 font-bold text-xs md:text-sm disabled:opacity-40 disabled:hover:bg-slate-950 transition flex items-center gap-1 cursor-pointer min-h-[40px]"
                      id="prev-question-btn"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span>Prev</span>
                    </button>

                    {/* Clear selection */}
                    {settings.mode === "exam" && !!userAnswers[currentQuestion.id] && (
                      <button
                        onClick={() => {
                          const updated = { ...userAnswers };
                          delete updated[currentQuestion.id];
                          setUserAnswers(updated);
                        }}
                        className="px-2.5 sm:px-3 py-1.5 sm:py-2 text-slate-500 hover:text-red-400 transition text-[10px] sm:text-xs font-bold rounded-lg hover:bg-red-950/20 cursor-pointer min-h-[36px]"
                        id="clear-answer-btn"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  {/* Desktop Keyboard Shortcuts Info badge */}
                  <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-slate-950/40 border border-slate-850 px-3 py-1.5 rounded-xl">
                    <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-slate-400">1 - 4</span>
                    <span>or</span>
                    <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-slate-400">A - D</span>
                    <span>to select</span>
                    <span className="text-slate-700 font-extrabold mx-0.5">•</span>
                    <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 rounded font-mono text-[10px] font-bold text-slate-400">Enter</span>
                    <span>to next</span>
                  </div>

                  {/* Next / Submit Buttons */}
                  {currentQuestionIndex < totalQuestionsCount - 1 ? (
                    <button
                      onClick={() => {
                        setCurrentQuestionIndex((prev) => Math.min(totalQuestionsCount - 1, prev + 1));
                        const qCard = document.getElementById("question-card");
                        if (qCard) qCard.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="px-3.5 sm:px-5 py-2 sm:py-2.5 bg-slate-950 hover:bg-slate-900 text-slate-200 border border-slate-800 font-bold text-xs md:text-sm rounded-xl shadow-sm transition flex items-center gap-1 shrink-0 cursor-pointer min-h-[40px]"
                      id="next-question-btn"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSubmitExam()}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs md:text-sm rounded-xl shadow-md transition flex items-center gap-1.5 cursor-pointer min-h-[40px]"
                      id="finish-exam-btn"
                    >
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-100" />
                      <span>Submit</span>
                    </button>
                  )}
                </div>

                {/* Mobile/Tablet Helper Grid Panel (SM/MD display only) */}
                <div className="lg:hidden bg-slate-900 border border-slate-850 rounded-2xl p-4 shadow-lg" id="mobile-questions-grid-panel">
                  <button
                    onClick={() => setShowMobileGrid(!showMobileGrid)}
                    className="w-full flex justify-between items-center text-left cursor-pointer min-h-[40px]"
                    id="mobile-grid-toggle-btn"
                  >
                    <div className="flex items-center gap-2">
                      <ListCollapse className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-black text-slate-200 uppercase tracking-wider">Quick Jump Board</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-400">({answeredCount}/{totalQuestionsCount} Done)</span>
                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${showMobileGrid ? "rotate-90" : ""}`} />
                    </div>
                  </button>

                  {showMobileGrid && (
                    <div className="mt-4 pt-4 border-t border-slate-800 animate-fade-in" id="mobile-grid-content">
                      {/* Simple Instructions key for mobile */}
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-slate-500 mb-4 pb-3 border-b border-slate-800" id="mobile-sidebar-legend">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded bg-slate-950 border border-slate-800 inline-block" />
                          <span>Unanswered</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded bg-emerald-600 inline-block" />
                          <span>Answered</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded bg-amber-500 inline-block" />
                          <span>Flagged</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded ring-2 ring-emerald-400 inline-block bg-slate-950" />
                          <span>Current</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 justify-start max-h-[250px] overflow-y-auto pr-1" id="mobile-q-buttons">
                        {activeQuestions.map((q, idx) => {
                          const isCurrent = idx === currentQuestionIndex;
                          const isAnswered = !!userAnswers[q.id];
                          const isFlagged = flaggedQuestions.includes(q.id);

                          let style = "border-slate-800 text-slate-400 bg-slate-950";
                          if (isAnswered) style = "bg-emerald-600 text-white border-emerald-600";
                          if (isFlagged) style = "bg-amber-500 text-slate-950 border-amber-500";
                          if (isCurrent) style += " ring-2 ring-emerald-400 ring-offset-1 ring-offset-slate-900";

                          return (
                            <button
                              key={q.id}
                              onClick={() => {
                                setCurrentQuestionIndex(idx);
                                const qCard = document.getElementById("question-card");
                                if (qCard) qCard.scrollIntoView({ behavior: "smooth", block: "start" });
                              }}
                              className={`w-8 h-8 rounded-lg text-[10px] font-black flex items-center justify-center transition cursor-pointer border shrink-0 ${style}`}
                              id={`mobile-q-btn-${q.id}`}
                            >
                              {idx + 1}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: POST-EXAM RESULTS VIEW */}
        {view === "results" && results && (
          <Results
            results={results}
            questions={activeQuestions}
            onRetakeAll={handleRetakeAll}
            onRetakeIncorrect={handleRetakeIncorrect}
            onGoHome={handleGoHome}
            onViewReview={handleViewReview}
          />
        )}

        {/* VIEW 4: DETAILED EXPLANATIONS REVIEW VIEW */}
        {view === "review" && (
          <ReviewMode
            questions={activeQuestions}
            userAnswers={userAnswers}
            initialFilter={reviewFilter}
            onBackToResults={() => setView("results")}
            onGoHome={handleGoHome}
          />
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-850 py-4 px-6 shrink-0 text-center text-xs text-slate-500 font-medium" id="app-footer">
        <p>© 2026 QAST IT Division Internship Preparation. Formulated strictly for practice purposes.</p>
      </footer>

      {/* CONFIRM SUBMISSION MODAL */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-slate-950/80 flex items-center justify-center p-4 z-50 animate-fade-in" id="submit-confirm-modal">
          <div className="bg-slate-900 rounded-2xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-slate-800 animate-scale-up" id="modal-card">
            <div className="flex items-center gap-3 text-red-400 mb-4" id="modal-header">
              <AlertCircle className="w-8 h-8 shrink-0" />
              <h3 className="text-xl font-black text-slate-100">Submit Exam Paper?</h3>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              You have completed <span className="font-bold text-slate-100">{answeredCount}</span> of <span className="font-bold text-slate-100">{totalQuestionsCount}</span> questions. 
              {answeredCount < totalQuestionsCount ? (
                <span className="text-red-400 font-bold block mt-2">
                  Warning: You have {totalQuestionsCount - answeredCount} unanswered questions remaining.
                </span>
              ) : (
                <span className="text-slate-400 block mt-2">
                  Awesome! You've provided an answer for every single question.
                </span>
              )}
            </p>

            <div className="flex gap-3 justify-end" id="modal-actions">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="px-4 py-2.5 text-xs font-bold text-slate-300 bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-lg transition cursor-pointer"
                id="modal-cancel-btn"
              >
                Go Back & Review
              </button>
              <button
                onClick={() => handleSubmitExam(true)}
                className="px-5 py-2.5 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md transition cursor-pointer"
                id="modal-confirm-submit-btn"
              >
                Confirm Submission
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRM EXIT MODAL */}
      {showExitConfirm && (
        <div className="fixed inset-0 bg-slate-950/80 flex items-center justify-center p-4 z-50 animate-fade-in" id="exit-confirm-modal">
          <div className="bg-slate-900 rounded-2xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-slate-800 animate-scale-up" id="exit-modal-card">
            <div className="flex items-center gap-3 text-amber-400 mb-4" id="exit-modal-header">
              <AlertCircle className="w-8 h-8 shrink-0" />
              <h3 className="text-xl font-black text-slate-100">Exit Practice Session?</h3>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Your current progress of <span className="font-bold text-slate-100">{answeredCount}</span> answered questions is saved automatically. You can safely return and resume exactly where you left off.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-end" id="exit-modal-actions">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-slate-300 bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-lg transition cursor-pointer text-center"
                id="exit-modal-resume-btn"
              >
                Keep Practicing
              </button>
              <button
                onClick={() => {
                  setShowExitConfirm(false);
                  setIsTimerRunning(false);
                  setView("intro");
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-extrabold text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-md transition cursor-pointer text-center"
                id="exit-modal-confirm-btn"
              >
                Exit & Save Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
