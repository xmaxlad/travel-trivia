import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './features/scoreSlice'

export const store = configureStore({
  reducer: {
    score: scoreReducer,
  },
})

// Infer the type of store
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch