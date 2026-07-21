import React from "react";
import { BookOpen, Clock, Settings, GraduationCap, Award, Play, AlertCircle } from "lucide-react";
import { SECTIONS, MOCK_QUESTIONS } from "../questions";

interface IntroductionProps {
  onStart: (settings: {
    mode: "exam" | "study";
    timed: boolean;
    timeLimit: number;
    scope: "all" | "section";
    selectedSection: string;
    questionCountType: "all" | "custom";
    customCount: number;
  }) => void;
  savedStateExists: boolean;
  onLoadSaved: () => void;
  onClearSaved: () => void;
}

export default function Introduction({ onStart, savedStateExists, onLoadSaved, onClearSaved }: IntroductionProps) {
  const [mode, setMode] = React.useState<"exam" | "study">("exam");
  const [timed, setTimed] = React.useState(true);
  const [timeLimit, setTimeLimit] = React.useState(180); // default 180 minutes for 250 questions
  const [scope, setScope] = React.useState<"all" | "section">("all");
  const [selectedSection, setSelectedSection] = React.useState<string>(SECTIONS[0]);
  const [questionCountType, setQuestionCountType] = React.useState<"all" | "custom">("all");
  const [customCount, setCustomCount] = React.useState<number>(30);

  const calculatedTotalQuestions = scope === "all"
    ? (questionCountType === "all" ? MOCK_QUESTIONS.length : customCount)
    : (questionCountType === "all" ? 50 : Math.min(50, customCount));

  // Automatically adjust recommended time limit when settings change
  React.useEffect(() => {
    let recommendedMinutes = 180;
    if (calculatedTotalQuestions === 10) recommendedMinutes = 15;
    else if (calculatedTotalQuestions === 20) recommendedMinutes = 30;
    else if (calculatedTotalQuestions === 30) recommendedMinutes = 45;
    else if (calculatedTotalQuestions === 50) recommendedMinutes = 60;
    else if (calculatedTotalQuestions === 100) recommendedMinutes = 120;
    else if (calculatedTotalQuestions === 250) recommendedMinutes = 180;
    else {
      recommendedMinutes = Math.max(10, Math.ceil((calculatedTotalQuestions * 1.2) / 5) * 5);
    }
    setTimeLimit(recommendedMinutes);
  }, [calculatedTotalQuestions]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12" id="intro-container">
      {/* Hero Header */}
      <div className="text-center mb-10 md:mb-14">
        <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl mb-4 border border-emerald-500/20" id="intro-badge">
          <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100 mb-4" id="intro-title">
          QAST ITO Internship
        </h1>
        <p className="text-lg md:text-xl font-medium text-slate-400 max-w-2xl mx-auto" id="intro-subtitle">
          Mock Examination Simulator & Practice Hub
        </p>
        <div className="mt-2 text-xs font-mono text-slate-500" id="intro-version">
          Tailored to the 2026 IT Division Requirements
        </div>
      </div>

      {/* Grid of Sections Covered */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg p-6 md:p-8 mb-8" id="syllabus-card">
        <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2" id="syllabus-title">
          <BookOpen className="w-5 h-5 text-emerald-400" />
          Exam Composition ({MOCK_QUESTIONS.length} Questions)
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          This mock exam strictly adheres to the official QAST IT Division guidelines, covering core topics essential for IT Operations, Software Development, Databases, Cloud, and Computer Science fundamentals.
        </p>
        
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" id="sections-grid">
          {SECTIONS.map((section, idx) => {
            const range = idx === 0 ? "Q1 - Q50 (50 Qs)" : 
                          idx === 1 ? "Q51 - Q100 (50 Qs)" :
                          idx === 2 ? "Q101 - Q150 (50 Qs)" :
                          idx === 3 ? "Q151 - Q200 (50 Qs)" : "Q201 - Q250 (50 Qs)";
            return (
              <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 flex flex-col justify-between" id={`section-card-${idx}`}>
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1" id={`section-range-${idx}`}>
                  {range}
                </div>
                <div className="text-sm font-bold text-slate-200" id={`section-name-${idx}`}>
                  {section}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Resume Session Banner */}
      {savedStateExists && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 md:p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" id="resume-banner">
          <div className="flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <div className="font-bold text-amber-300 text-sm md:text-base">In-Progress Exam Found!</div>
              <p className="text-slate-400 text-xs md:text-sm mt-0.5">
                You have a saved session containing your previous answers. You can resume exactly where you left off.
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto shrink-0 justify-end">
            <button
              onClick={onClearSaved}
              className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition"
              id="clear-session-btn"
            >
              Reset Session
            </button>
            <button
              onClick={onLoadSaved}
              className="px-4 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition"
              id="resume-session-btn"
            >
              Resume Exam
            </button>
          </div>
        </div>
      )}

      {/* Settings Options */}
      <div className="grid md:grid-cols-2 gap-6 mb-8" id="settings-grid">
        {/* Practice Mode Selection */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg p-6" id="mode-selector-card">
          <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2" id="mode-selector-title">
            <Settings className="w-5 h-5 text-emerald-400" />
            1. Select Practice Mode
          </h3>
          
          <div className="space-y-3" id="modes-container">
            <button
              type="button"
              onClick={() => setMode("exam")}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                mode === "exam"
                  ? "border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/10"
                  : "border-slate-800 hover:border-slate-700 bg-slate-950 text-slate-400"
              }`}
              id="exam-mode-select-btn"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-slate-200" id="exam-mode-title">Exam Mode</span>
                {mode === "exam" && <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" id="exam-mode-indicator" />}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed" id="exam-mode-desc">
                Simulates the real test. Score and explanations are revealed only **after** complete submission. Highly recommended for pacing!
              </p>
            </button>

            <button
              type="button"
              onClick={() => setMode("study")}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                mode === "study"
                  ? "border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/10"
                  : "border-slate-800 hover:border-slate-700 bg-slate-950 text-slate-400"
              }`}
              id="study-mode-select-btn"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-slate-200" id="study-mode-title">Study & Practice Mode</span>
                {mode === "study" && <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" id="study-mode-indicator" />}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed" id="study-mode-desc">
                Interactive learning. Check correctness immediately upon answering each question, with instant red/green feedback and direct explanations.
              </p>
            </button>
          </div>
        </div>

        {/* Timing Options */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg p-6 flex flex-col justify-between" id="timing-card">
          <div>
            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2" id="timing-title">
              <Clock className="w-5 h-5 text-emerald-400" />
              2. Timing Controls
            </h3>
            
            <div className="space-y-4" id="timing-options-container">
              <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-slate-950/40" id="timed-toggle-label">
                <input
                  type="checkbox"
                  checked={timed}
                  onChange={(e) => setTimed(e.target.checked)}
                  className="w-4.5 h-4.5 rounded text-emerald-500 focus:ring-emerald-500 border-slate-700 bg-slate-950"
                  id="timed-toggle-checkbox"
                />
                <div>
                  <span className="text-sm font-bold text-slate-200" id="timed-toggle-text">Enable Countdown Timer</span>
                  <p className="text-xs text-slate-400" id="timed-toggle-desc">Auto-submits the exam when the time expires.</p>
                </div>
              </label>

              {timed && (
                <div className="pl-7 space-y-2 animate-fade-in" id="time-limit-selector">
                  <span className="text-xs font-bold text-slate-500" id="time-limit-label">Duration Limit:</span>
                  <div className="flex items-center gap-2" id="time-limit-buttons">
                    {[60, 120, 180, 240].map((mins) => (
                      <button
                        key={mins}
                        type="button"
                        onClick={() => setTimeLimit(mins)}
                        className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg border transition ${
                          timeLimit === mins
                            ? "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-500"
                            : "bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800"
                        }`}
                        id={`time-limit-${mins}-btn`}
                      >
                        {mins} min
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400" id="timing-tip">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Recommended: {MOCK_QUESTIONS.length} questions / 180 minutes.</span>
          </div>
        </div>
      </div>

      {/* 3. Test Scope & Size Customization */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg p-6 mb-8" id="scope-customization-card">
        <h3 className="text-lg font-bold text-slate-100 mb-5 flex items-center gap-2" id="scope-title">
          <Settings className="w-5 h-5 text-emerald-400" />
          3. Customize Test Scope & Question Count
        </h3>

        <div className="grid md:grid-cols-2 gap-6" id="scope-grid-container">
          {/* Left: Test Scope Selection */}
          <div className="space-y-4" id="scope-left-pane">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider" id="scope-selection-label">
              Test Coverage:
            </span>
            <div className="grid grid-cols-2 gap-3" id="scope-selection-buttons">
              <button
                type="button"
                onClick={() => {
                  setScope("all");
                  setQuestionCountType("all"); // Reset to all by default for full test
                }}
                className={`py-3 px-4 rounded-xl border text-sm font-bold text-center transition duration-200 cursor-pointer ${
                  scope === "all"
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-300 font-extrabold"
                    : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                }`}
                id="scope-all-btn"
              >
                Full Test (All Sections)
              </button>
              <button
                type="button"
                onClick={() => {
                  setScope("section");
                }}
                className={`py-3 px-4 rounded-xl border text-sm font-bold text-center transition duration-200 cursor-pointer ${
                  scope === "section"
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-300 font-extrabold"
                    : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                }`}
                id="scope-section-btn"
              >
                Single Section Practice
              </button>
            </div>

            {/* Dynamic Section Dropdown / Button Grid */}
            {scope === "section" && (
              <div className="space-y-2 animate-fade-in" id="section-select-container">
                <label className="text-xs font-bold text-slate-400" id="section-dropdown-label">
                  Select Section to Practice:
                </label>
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl border border-slate-800 bg-slate-950 text-slate-200 text-sm focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  id="section-select-dropdown"
                >
                  {SECTIONS.map((sec, idx) => (
                    <option key={idx} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-500 italic" id="section-range-note">
                  Covers exactly 50 specialized questions for this section.
                </p>
              </div>
            )}
          </div>

          {/* Right: Question Count Customization */}
          <div className="space-y-4" id="scope-right-pane">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider" id="count-selection-label">
              Question Volume:
            </span>
            <div className="grid grid-cols-2 gap-3" id="count-type-buttons">
              <button
                type="button"
                onClick={() => setQuestionCountType("all")}
                className={`py-3 px-4 rounded-xl border text-sm font-bold text-center transition duration-200 cursor-pointer ${
                  questionCountType === "all"
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-300 font-extrabold"
                    : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                }`}
                id="count-all-btn"
              >
                All Questions ({scope === "all" ? 250 : 50})
              </button>
              <button
                type="button"
                onClick={() => setQuestionCountType("custom")}
                className={`py-3 px-4 rounded-xl border text-sm font-bold text-center transition duration-200 cursor-pointer ${
                  questionCountType === "custom"
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-300 font-extrabold"
                    : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                }`}
                id="count-custom-btn"
              >
                Custom Count...
              </button>
            </div>

            {/* Dynamic Question Count Selector buttons */}
            {questionCountType === "custom" && (
              <div className="space-y-2 animate-fade-in" id="custom-count-selector">
                <label className="text-xs font-bold text-slate-400 block" id="custom-count-label">
                  Select number of random questions:
                </label>
                <div className="flex flex-wrap gap-2" id="custom-count-buttons">
                  {[10, 20, 30, 50, 100].map((num) => {
                    // Skip 100 if section scope is active (section only has 50 questions!)
                    if (scope === "section" && num > 50) return null;
                    return (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setCustomCount(num)}
                        className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg border transition cursor-pointer ${
                          customCount === num
                            ? "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-500"
                            : "bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800"
                        }`}
                        id={`custom-count-${num}-btn`}
                      >
                        {num} Qs
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] text-slate-500 leading-normal" id="custom-count-explain-note">
                  {scope === "all" ? (
                    <span>
                      Perfect balance: selects exactly <span className="text-emerald-400 font-bold">{customCount / 5}</span> random questions from <strong>each of the 5 sections</strong>!
                    </span>
                  ) : (
                    <span>Selects {customCount} random questions from the chosen section.</span>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400" id="scope-summary-tip">
          <div className="flex items-center gap-1.5" id="scope-summary-left">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Configured: <strong className="text-slate-200">{calculatedTotalQuestions} questions</strong> from{" "}
              <strong className="text-slate-200">
                {scope === "all" ? "All Syllabus Sections" : selectedSection}
              </strong>.
            </span>
          </div>
          <span className="text-emerald-400 font-mono font-bold" id="recommended-time-hint">
            Recommended timer: {timeLimit} minutes
          </span>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="text-center" id="start-btn-container">
        <button
          onClick={() => onStart({ mode, timed, timeLimit, scope, selectedSection, questionCountType, customCount })}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-lg rounded-xl shadow-lg shadow-emerald-900/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          id="begin-exam-btn"
        >
          <Play className="w-5 h-5 fill-current" />
          Start Mock Examination
        </button>
        <p className="text-xs text-slate-500 mt-3" id="start-exam-tip">
          You can save and close at any time; your progress is automatically cached locally.
        </p>
      </div>
    </div>
  );
}
