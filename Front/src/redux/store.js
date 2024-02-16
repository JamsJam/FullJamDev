import { configureStore } from '@reduxjs/toolkit'
import projects from './Slices/ProjectSlice'

export const store = configureStore({
  reducer: {
    projects : projects
  },
})