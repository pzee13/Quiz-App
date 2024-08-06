import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../slice/quizSlice'; 
import userReducer from '../slice/userSlice'; 
import  { QuizState,UserState } from '../types/interfaces'; 


const store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer,
  },
});


export type RootState = {
  user: UserState;
  quiz: QuizState;
};

export type AppDispatch = typeof store.dispatch;
export default store;
