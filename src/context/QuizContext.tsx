import React, { createContext, useState, ReactNode } from 'react';
import { QUESTIONS } from '../utils/data'; // Import constants

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type QuizContextType = {
  score: number;
  currentQuestionIndex: number;
  questions: Question[];
  timer: number;
  setScore: (score: number) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setTimer: (timer: number) => void;
};

export const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [score, setScore] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(5);

  return (
    <QuizContext.Provider value={{ score, currentQuestionIndex, questions: QUESTIONS, timer, setScore, setCurrentQuestionIndex, setTimer }}>
      {children}
    </QuizContext.Provider>
  );
};

