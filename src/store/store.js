import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './dateSlice';

export default configureStore({
  reducer: {
    date: dateSlice
  },
});
