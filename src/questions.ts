import { Question } from "./types";
import { QUESTIONS_SEC1 } from "./questions_sec1";
import { QUESTIONS_SEC2 } from "./questions_sec2";
import { QUESTIONS_SEC3 } from "./questions_sec3";
import { QUESTIONS_SEC4 } from "./questions_sec4";
import { QUESTIONS_SEC5 } from "./questions_sec5";
import { QUESTIONS_FOCUS, FOCUS_SUBJECTS } from "./questions_focus";

export { FOCUS_SUBJECTS, QUESTIONS_FOCUS };

export const MOCK_QUESTIONS: Question[] = [
  ...QUESTIONS_SEC1,
  ...QUESTIONS_SEC2,
  ...QUESTIONS_SEC3,
  ...QUESTIONS_SEC4,
  ...QUESTIONS_SEC5
];

export const SECTIONS = [
  "Software Development & Web Technologies",
  "IT Operations & Systems Maintenance",
  "Databases & Cloud Infrastructure",
  "Artificial Intelligence & Data Analysis",
  "Computer Science Fundamentals & Problem Solving"
];

export const SECTION_QUESTIONS_RANGE: { [key: string]: string } = {
  "Software Development & Web Technologies": "Q1 - Q50",
  "IT Operations & Systems Maintenance": "Q51 - Q100",
  "Databases & Cloud Infrastructure": "Q101 - Q150",
  "Artificial Intelligence & Data Analysis": "Q151 - Q200",
  "Computer Science Fundamentals & Problem Solving": "Q201 - Q250"
};
