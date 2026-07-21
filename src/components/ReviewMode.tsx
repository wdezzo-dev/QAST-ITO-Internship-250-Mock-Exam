import React from "react";
import { Check, X, ChevronLeft, BookOpen, ListFilter, CheckCircle2, XCircle, AlertCircle, HelpCircle } from "lucide-react";
import { Question } from "../types";

interface ReviewModeProps {
  questions: Question[];
  userAnswers: { [questionId: number]: string };
  initialFilter: "all" | "mistakes" | "correct";
  onBackToResults: () => void;
  onGoHome: () => void;
}

export default function ReviewMode({
  questions,
  userAnswers,
  initialFilter,
  onBackToResults,
  onGoHome,
}: ReviewModeProps) {
  const [filter, setFilter] = React.useState<"all" | "mistakes" | "correct">(initialFilter);

  // Filter questions based on selected filter
  const filteredQuestions = questions.filter((q) => {
    const userAnswer = userAnswers[q.id];
    const isCorrect = userAnswer === q.correctAnswer;
    
    if (filter === "mistakes") {
      return !isCorrect;
    }
    if (filter === "correct") {
      return isCorrect;
    }
    return true; // "all"
  });

  const getStats = () => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    questions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (!ans) skipped++;
      else if (ans === q.correctAnswer) correct++;
      else wrong++;
    });

    return { correct, wrong, skipped };
  };

  const { correct, wrong, skipped } = getStats();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="review-container">
      {/* Header and Back buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6" id="review-nav-header">
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToResults}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-300 transition flex items-center justify-center border border-slate-800 cursor-pointer"
            id="back-to-results-btn"
            title="Back to Results"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-slate-100" id="review-title">
              Detailed Question Review
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Review answers, verify errors, and study correct explanations.
            </p>
          </div>
        </div>

        <button
          onClick={onGoHome}
          className="text-xs font-bold text-emerald-400 hover:text-emerald-300 hover:underline shrink-0 text-left cursor-pointer"
          id="review-gohome-btn"
        >
          Return to Config Screen
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 mb-6 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4" id="review-filters-card">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
          <ListFilter className="w-4 h-4 text-slate-400" />
          Filter Questions:
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto" id="review-filter-buttons">
          <button
            onClick={() => setFilter("all")}
            className={`flex-1 md:flex-initial px-4 py-2 text-xs font-bold rounded-lg border transition ${
              filter === "all"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-850"
            }`}
            id="filter-all-btn"
          >
            All Questions ({questions.length})
          </button>

          <button
            onClick={() => setFilter("mistakes")}
            className={`flex-1 md:flex-initial px-4 py-2 text-xs font-bold rounded-lg border transition flex items-center justify-center gap-1.5 ${
              filter === "mistakes"
                ? "bg-red-600 text-white border-red-600"
                : "bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20"
            }`}
            id="filter-mistakes-btn"
          >
            <XCircle className="w-3.5 h-3.5" />
            Mistakes ({wrong + skipped})
          </button>

          <button
            onClick={() => setFilter("correct")}
            className={`flex-1 md:flex-initial px-4 py-2 text-xs font-bold rounded-lg border transition flex items-center justify-center gap-1.5 ${
              filter === "correct"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20"
            }`}
            id="filter-correct-btn"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Correct ({correct})
          </button>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6" id="review-questions-list">
        {filteredQuestions.length === 0 ? (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-12 text-center shadow-lg" id="empty-filter-state">
            <AlertCircle className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-300">No questions found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              {filter === "mistakes" 
                ? "Congratulations! You got everything correct. There are no mistakes to review."
                : "You don't have any correct answers in this set yet."}
            </p>
          </div>
        ) : (
          filteredQuestions.map((q, qIdx) => {
            const userAnswer = userAnswers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            const isSkipped = !userAnswer;

            return (
              <div
                key={q.id}
                className={`bg-slate-900 rounded-2xl border shadow-lg overflow-hidden transition-all ${
                  isSkipped
                    ? "border-amber-500/30"
                    : isCorrect
                    ? "border-emerald-500/30"
                    : "border-red-500/30"
                }`}
                id={`review-q-card-${q.id}`}
              >
                {/* Card Top Banner */}
                <div
                  className={`px-6 py-3.5 flex items-center justify-between text-xs font-bold border-b ${
                    isSkipped
                      ? "bg-amber-500/10 border-amber-500/20 text-amber-300"
                      : isCorrect
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                      : "bg-red-500/10 border-red-500/20 text-red-300"
                  }`}
                  id={`review-q-banner-${q.id}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm">Question {q.id} of {questions.length}</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-slate-400 font-semibold truncate max-w-[200px] sm:max-w-none">
                      {q.section}
                    </span>
                  </div>
                  
                  <div className="shrink-0 font-extrabold flex items-center gap-1.5" id={`review-q-status-${q.id}`}>
                    {isSkipped ? (
                      <>
                        <AlertCircle className="w-4 h-4 text-amber-400" />
                        <span>Skipped</span>
                      </>
                    ) : isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Correct</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-red-400" />
                        <span>Incorrect</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 md:p-8" id={`review-q-body-${q.id}`}>
                  {/* Question Text */}
                  <h3 className="text-base md:text-lg font-bold text-slate-100 leading-snug mb-6" id={`review-q-text-${q.id}`}>
                    {q.text}
                  </h3>

                  {/* Options List */}
                  <div className="space-y-3 mb-6" id={`review-q-options-${q.id}`}>
                    {q.options.map((opt) => {
                      const isCorrectOpt = opt.key === q.correctAnswer;
                      const isUserSelected = opt.key === userAnswer;

                      let optStyle = "border-slate-800 bg-slate-950/50 text-slate-300 hover:bg-slate-950/80";
                      let badgeIcon = null;

                      if (isCorrectOpt) {
                        // Correct option is always highlighted in green
                        optStyle = "border-emerald-500/50 bg-emerald-500/10 text-emerald-200 font-medium ring-2 ring-emerald-500/10";
                        badgeIcon = <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0" />;
                      } else if (isUserSelected && !isCorrect) {
                        // User's wrong selection is highlighted in red
                        optStyle = "border-red-500/50 bg-red-500/10 text-red-200 font-medium ring-2 ring-red-500/10";
                        badgeIcon = <X className="w-4.5 h-4.5 text-red-400 shrink-0" />;
                      }

                      return (
                        <div
                          key={opt.key}
                          className={`flex items-start gap-3 p-4 rounded-xl border text-sm transition ${optStyle}`}
                          id={`review-opt-${q.id}-${opt.key}`}
                        >
                          <span
                            className={`inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold shrink-0 mt-0.5 ${
                              isCorrectOpt
                                ? "bg-emerald-600 text-white"
                                : isUserSelected
                                ? "bg-red-600 text-white"
                                : "bg-slate-800 text-slate-300"
                            }`}
                          >
                            {opt.key}
                          </span>
                          <span className="flex-1 leading-relaxed">{opt.text}</span>
                          {badgeIcon}
                        </div>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation Block */}
                  <div className="p-5 rounded-xl border border-slate-850 bg-slate-950" id={`review-q-explanation-${q.id}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-slate-500" />
                      <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                        Answer Key & Explanation
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 font-medium leading-relaxed">
                      <span className="font-bold text-slate-100">Correct Answer: {q.correctAnswer}</span> — {q.explanation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Review footer navigation */}
      <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between" id="review-footer-nav">
        <button
          onClick={onBackToResults}
          className="px-6 py-2.5 text-xs font-bold text-slate-300 hover:text-slate-100 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-lg transition cursor-pointer"
          id="review-back-results-btn"
        >
          Back to Score Card
        </button>
        <button
          onClick={onGoHome}
          className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition cursor-pointer"
          id="review-back-home-btn"
        >
          Retake or Reconfigure
        </button>
      </div>
    </div>
  );
}
