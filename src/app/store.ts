import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../slice/quizSlice'; 
import  { QuizState } from '../types/interfaces'; 


const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});



export type RootState = {
  quiz: QuizState;
};

export type AppDispatch = typeof store.dispatch;
export default store;
