import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://vcxyhhzvjsaa6p2acmczr3v7pi0xpffx.lambda-url.us-east-1.on.aws/' }),
    endpoints: (builder) => ({
      createUser: builder.mutation({
        query: (userData) => {
          return {
            url: '/users/register',
            method: 'POST',
            body: userData,
          };
        },
      }),
    }),
  });

export const { useCreateUserMutation } = userApiSlice;
