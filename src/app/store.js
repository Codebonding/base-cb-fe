import { configureStore } from '@reduxjs/toolkit';
import { userApiSlice } from '../features/api/userApiSlice';
import { companiesApiSlice } from '../features/api/companyApiSlice'

export const store = configureStore({
  reducer: {
    [companiesApiSlice.reducerPath]: companiesApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware).concat(companiesApiSlice.middleware),
});
