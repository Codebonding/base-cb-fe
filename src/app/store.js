import { configureStore } from "@reduxjs/toolkit";
import { userApiSlice } from "../features/api/userApiSlice";
import { companiesApiSlice } from "../features/api/companyApiSlice";
import { testApi } from "../features/api/testApiSlice";

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [companiesApiSlice.reducerPath]: companiesApiSlice.reducer,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApiSlice.middleware)
      .concat(companiesApiSlice.middleware)
      .concat(testApi.middleware),
});
