import { configureStore } from '@reduxjs/toolkit';
import addTaskReducer from './addTask/addTask';

export const store = configureStore({
  reducer: {
    task: addTaskReducer,
  },
});
