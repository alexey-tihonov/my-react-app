import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types/post';
import { NameSpace } from '../const';

export const postsApi = createApi({
  reducerPath: NameSpace.Posts,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => '/posts'
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;