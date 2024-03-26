import { configureStore, Tuple } from '@reduxjs/toolkit';
import counterSlice from "./Slices/CounterSlice";
import testApiCall from "./Slices/TestApiCallSlice";
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    testApiCall
  },
  middleware: () => new Tuple(thunk),
})