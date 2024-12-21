import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const companiesApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vcxyhhzvjsaa6p2acmczr3v7pi0xpffx.lambda-url.us-east-1.on.aws/api' }),
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: () => 'companies',
    }),
  }),
});

export const { useGetCompaniesQuery } = companiesApiSlice;
