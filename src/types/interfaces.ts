

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizState {
  score: number;
  currentQuestionIndex: number;
  timer: number;
  questions: Question[];
}


export interface UserState {
  username: string;
}
