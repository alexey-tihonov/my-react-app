import { Post } from "../types/post";
import { State } from "../types/state";

export const getLoadingStatus = (state: State): boolean => state.APP.isLoading;
export const getPosts = (state: State): Post[] => state.APP.posts;
export const getPostsLoadingStatus = (state: State): boolean => state.APP.isPostsLoading;