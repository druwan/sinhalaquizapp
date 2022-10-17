import { type } from "os";

export interface Category {
  id: number;
  topic: string;
}

export interface QuizQuestion {
  id: number;
  english: string;
  sinhala: {
    alphabetical: string;
    script: string;
  };
}

export interface QuizQuestionTimePronoun extends QuizQuestion {
  type: string;
}
