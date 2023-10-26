import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greeting/greetingSlice.js';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;