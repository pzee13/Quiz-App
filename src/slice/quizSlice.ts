import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizState } from '../types/interfaces'; // Import interfaces
import { questions } from '../data/quizData'; // 


const initialState: QuizState = {
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
    },
    setCurrentQuestionIndex: (state, action: PayloadAction<number>) => {
      state.currentQuestionIndex = action.payload;
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
    },
    resetQuiz: (state) => {
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.timer = 5;
    },
  },
});


export const { setScore, setCurrentQuestionIndex, setTimer, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;
