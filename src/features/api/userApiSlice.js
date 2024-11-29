import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://codebondingworkforce.com/' }),
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
