import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizState } from '../types/interfaces';
import { questions } from '../data/quizData';


const getQuizStateFromLocalStorage = (): QuizState | null => {
  const quizState = localStorage.getItem('quizState');
  return quizState ? JSON.parse(quizState) : null;
};


const initialState: QuizState = getQuizStateFromLocalStorage() || {
  score: 0,
  currentQuestionIndex: 0,
  timer: 5,
  questions: questions,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
      localStorage.setItem('quizState', JSON.stringify(state));
    },
    setCurrentQuestionIndex: (state, action: PayloadAction<number>) => {
      state.currentQuestionIndex = action.payload;
      localStorage.setItem('quizState', JSON.stringify(state));
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
      localStorage.setItem('quizState', JSON.stringify(state));
    },
    resetQuiz: (state) => {
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.timer = 5;
      localStorage.setItem('quizState', JSON.stringify(state));
    },
  },
});

export const { setScore, setCurrentQuestionIndex, setTimer, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
