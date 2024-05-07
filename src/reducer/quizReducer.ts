import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizResult } from '../shared/utils/types';

interface QuizState {
  questions: QuizResult[];
  currentQuestionIndex: number;
  userAnswers: string[];
  score: number;
  category: string;
}

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: [],
  score: 0,
  category: ""
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<QuizResult[]>) => {
      state.questions = action.payload;
    },
    setCurrentQuestionIndex: (state, action: PayloadAction<number>) => {
      state.currentQuestionIndex = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
        state.category = action.payload
    },
    setUserAnswer: (
      state,
      action: PayloadAction<{ index: number; answer: string }>
    ) => {
      state.userAnswers[action.payload.index] = action.payload.answer;
    },
    updateScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
  },
});

export const {
  setQuestions,
  setCurrentQuestionIndex,
  setUserAnswer,
  updateScore,
  setCategory,
} = quizSlice.actions;

export default quizSlice.reducer;
