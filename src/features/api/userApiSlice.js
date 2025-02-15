import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://nx0kzm0py9.execute-api.ap-southeast-2.amazonaws.com/' }),
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
