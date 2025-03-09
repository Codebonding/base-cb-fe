import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const testApi = createApi({
  reducerPath: 'testApi',  // ✅ Ensure the reducer path is UNIQUE
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tnpezvbw53.execute-api.us-east-1.amazonaws.com/api' }),
  tagTypes: ["User"],  // ✅ For caching & invalidation
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
        headers: { 'Content-Type': 'application/json' },
      }),
      invalidatesTags: ["User"], // ✅ Only needed for mutations that change data
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
        headers: { 'Content-Type': 'application/json' },
      }),
      // ❌ `invalidatesTags` should NOT be here (REMOVE IT)
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = testApi;
