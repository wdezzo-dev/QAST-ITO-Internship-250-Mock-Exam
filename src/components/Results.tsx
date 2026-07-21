import { Award, BookOpen, Clock, RotateCcw, AlertTriangle, CheckCircle, ChevronRight, HelpCircle } from "lucide-react";
import { ExamResults, Question } from "../types";
import { SECTIONS } from "../questions";

interface ResultsProps {
  results: ExamResults;
  questions: Question[];
  onRetakeAll: () => void;
  onRetakeIncorrect: () => void;
  onGoHome: () => void;
  onViewReview: (filter: "all" | "mistakes" | "correct") => void;
}

export default function Results({
  results,
  questions,
  onRetakeAll,
  onRetakeIncorrect,
  onGoHome,
  onViewReview,
}: ResultsProps) {
  const percentage = Math.round((results.score / results.totalQuestions) * 100);
  const isPassing = percentage >= 70; // 70% passing threshold for professional exams

  const incorrectCount = results.totalQuestions - results.score;

  // Format time taken
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins === 0) return `${secs}s`;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="results-view">
      {/* Top Banner / Hero Card */}
      <div
        className={`rounded-3xl border p-8 md:p-10 text-center shadow-lg mb-8 ${
          isPassing
            ? "bg-emerald-950/40 border-emerald-900/50 text-emerald-100"
            : "bg-red-950/20 border-red-900/30 text-red-200"
        }`}
        id="results-status-card"
      >
        <div className="inline-flex items-center justify-center p-4 rounded-2xl mb-4 bg-slate-950 shadow-md border border-slate-850" id="results-icon">
          {isPassing ? (
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          ) : (
            <AlertTriangle className="w-10 h-10 text-red-400" />
          )}
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2" id="results-score-title">
          {percentage}% Score
        </h1>
        <p className="text-lg font-bold mb-6" id="results-score-fraction">
          You answered <span className="text-emerald-400 font-black">{results.score}</span> correct out of <span className="text-slate-400">{results.totalQuestions}</span> questions
        </p>

        {isPassing ? (
          <div className="max-w-md mx-auto" id="passing-text">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 uppercase tracking-wider mb-2">
              Pass achieved
            </span>
            <p className="text-sm text-emerald-200 font-medium">
              Excellent preparation! You scored above the 70% threshold. You demonstrate strong proficiency in IT Systems, Software Development, and Computer Science Fundamentals.
            </p>
          </div>
        ) : (
          <div className="max-w-md mx-auto" id="failing-text">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 uppercase tracking-wider mb-2">
              Needs Improvement
            </span>
            <p className="text-sm text-red-300 font-medium">
              Keep studying! A 70% is recommended to ensure high confidence on the real exam. Use the Review option below to examine and master your mistake areas.
            </p>
          </div>
        )}
      </div>

      {/* Metrics Summary Rows */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8" id="metrics-summary-grid">
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 flex items-center gap-4" id="time-taken-metric">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Time Taken</div>
            <div className="text-lg font-extrabold text-slate-200">{formatTime(results.timeTaken)}</div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 flex items-center gap-4" id="correct-metric">
          <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Correct</div>
            <div className="text-lg font-extrabold text-emerald-400">{results.score} Qs</div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 flex items-center gap-4 col-span-2 sm:col-span-1" id="incorrect-metric">
          <div className="p-3 bg-red-500/10 text-red-400 rounded-xl shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mistakes</div>
            <div className="text-lg font-extrabold text-red-400">{incorrectCount} Qs</div>
          </div>
        </div>
      </div>

      {/* Section-by-Section Score Analysis */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg p-6 md:p-8 mb-8" id="section-analysis-card">
        <h2 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2" id="section-analysis-title">
          <BookOpen className="w-5 h-5 text-emerald-400" />
          Performance Breakdown by Subject Area
        </h2>
        
        <div className="space-y-6" id="section-bars-container">
          {Object.keys(results.sectionScores).map((sectionName) => {
            const scoreData = results.sectionScores[sectionName] || { correct: 0, total: 0 };
            const sectionPercent = scoreData.total > 0 ? Math.round((scoreData.correct / scoreData.total) * 100) : 0;
            const isSectionPassing = sectionPercent >= 70;

            return (
              <div key={sectionName} className="space-y-2" id={`section-metric-${sectionName.replace(/\s+/g, '-')}`}>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-slate-300 max-w-[70%] sm:max-w-[80%] truncate">
                    {sectionName}
                  </span>
                  <span className="font-mono font-extrabold text-slate-100 shrink-0">
                    {scoreData.correct} / {scoreData.total} ({sectionPercent}%)
                  </span>
                </div>
                
                {/* Visual Progress Bar */}
                <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden flex" id={`bar-container-${sectionName.replace(/\s+/g, '-')}`}>
                  <div
                    style={{ width: `${sectionPercent}%` }}
                    className={`h-full rounded-full transition-all duration-500 ${
                      isSectionPassing ? "bg-emerald-500" : "bg-red-500"
                    }`}
                    id={`bar-fill-${sectionName.replace(/\s+/g, '-')}`}
                  />
                </div>
                
                <div className="flex justify-between text-[11px] font-semibold text-slate-500">
                  <span>{scoreData.total - scoreData.correct} wrong answers</span>
                  <span className={isSectionPassing ? "text-emerald-400" : "text-red-400"}>
                    {isSectionPassing ? "Proficient" : "Focus Study"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Actions Panel */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8" id="results-actions-panel">
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between shadow-lg" id="results-review-card">
          <div>
            <h3 className="font-bold text-slate-200 text-base mb-2">Review Mode</h3>
            <p className="text-xs text-slate-400 mb-6">
              Examine each question, verify your answers (highlighted in red for wrong, green for correct), and read detailed technical explanations for every question to solidfy your preparation.
            </p>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => onViewReview("all")}
              className="w-full flex items-center justify-between px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-xl transition cursor-pointer"
              id="view-all-review-btn"
            >
              <span>Review All Questions</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            {incorrectCount > 0 && (
              <button
                onClick={() => onViewReview("mistakes")}
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-850 hover:bg-slate-800 text-slate-300 text-sm font-bold rounded-xl transition border border-slate-800 cursor-pointer"
                id="view-mistakes-review-btn"
              >
                <span>Review Mistakes Only ({incorrectCount})</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between shadow-lg" id="results-retry-card">
          <div>
            <h3 className="font-bold text-slate-200 text-base mb-2">Retake & Retrain</h3>
            <p className="text-xs text-slate-400 mb-6">
              Reset and re-attempt the exam. You can either retake the full {results.totalQuestions}-question paper from scratch, or do a focused study of ONLY the questions you missed.
            </p>
          </div>
          <div className="space-y-2">
            {incorrectCount > 0 && (
              <button
                onClick={onRetakeIncorrect}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-950/30 border border-emerald-900/50 hover:bg-emerald-950/60 text-emerald-400 text-sm font-bold rounded-xl transition cursor-pointer"
                id="retake-incorrect-btn"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Mistakes Only ({incorrectCount})
              </button>
            )}
            <button
              onClick={onRetakeAll}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-950 hover:bg-slate-900 text-slate-200 text-sm font-bold rounded-xl transition border border-slate-800 cursor-pointer"
              id="retake-all-btn"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Entire Exam
            </button>
          </div>
        </div>
      </div>

      {/* Back home action */}
      <div className="text-center" id="results-home-container">
        <button
          onClick={onGoHome}
          className="px-6 py-2.5 text-sm font-bold text-slate-400 hover:text-slate-200 bg-slate-900 hover:bg-slate-850 rounded-xl transition cursor-pointer border border-slate-800"
          id="results-home-btn"
        >
          Return to Settings / Configuration
        </button>
      </div>
    </div>
  );
}
