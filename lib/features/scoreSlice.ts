import { createSlice } from '@reduxjs/toolkit';
import type { Score } from '@/lib/types';

const initialState: Score = {
    total: 0,
    correct: 0,
    wrong: 0
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        incrementCorrect: (state) => {
            state.total += 1;
            state.correct += 1;
        },
        incrementWrong: (state) => {
            state.total -= 1;
            state.wrong += 1;
        },
        resetScore: (state) => {
            state.total = 0;
            state.correct = 0;
            state.wrong = 0;
        }
    }
});

export const { incrementCorrect, incrementWrong, resetScore } = scoreSlice.actions;
export default scoreSlice.reducer; 