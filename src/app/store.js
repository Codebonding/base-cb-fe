import { configureStore } from '@reduxjs/toolkit';
import { userApiSlice } from '../features/api/userApiSlice';

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware),
});
