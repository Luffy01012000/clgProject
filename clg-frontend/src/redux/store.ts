// store.ts
import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './reducers/bookingSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;