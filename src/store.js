import { configureStore } from '@reduxjs/toolkit'
import app from '@/reducers/AppSlice';
export const store = configureStore({
  reducer: {
    app
  },
})