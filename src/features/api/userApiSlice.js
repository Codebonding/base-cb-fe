import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://3.92.65.152:3000/' }),
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
