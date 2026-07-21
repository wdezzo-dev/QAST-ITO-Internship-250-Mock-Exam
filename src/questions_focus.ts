import { Question } from "./types";
import { QUESTIONS_FOCUS_NETWORKS } from "./questions_focus_networks";
import { QUESTIONS_FOCUS_LINUX } from "./questions_focus_linux";
import { QUESTIONS_FOCUS_DATABASE } from "./questions_focus_database";
import { QUESTIONS_FOCUS_SOFTSKILLS } from "./questions_focus_softskills";
import { QUESTIONS_FOCUS_SECURITY } from "./questions_focus_security";

export const FOCUS_SUBJECTS = [
  "Networks",
  "Linux",
  "Database",
  "Soft Skills",
  "Security"
];

export const QUESTIONS_FOCUS: Question[] = [
  ...QUESTIONS_FOCUS_NETWORKS,
  ...QUESTIONS_FOCUS_LINUX,
  ...QUESTIONS_FOCUS_DATABASE,
  ...QUESTIONS_FOCUS_SOFTSKILLS,
  ...QUESTIONS_FOCUS_SECURITY
];
