export interface Option {
  key: string; // 'A', 'B', 'C', or 'D'
  text: string;
}

export interface Question {
  id: number; // 1 to 50
  text: string;
  options: Option[];
  correctAnswer: string; // 'A', 'B', 'C', or 'D'
  explanation: string;
  section: string;
}

export interface ExamResults {
  score: number; // number of correct answers
  totalQuestions: number;
  sectionScores: { [sectionName: string]: { correct: number; total: number } };
  userAnswers: { [questionId: number]: string };
  timeTaken: number; // in seconds
}
