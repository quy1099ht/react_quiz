import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizReducer'; // Import your reducer

const store = configureStore({
  reducer: quizReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>