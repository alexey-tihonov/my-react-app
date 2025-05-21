import { createSlice } from "@reduxjs/toolkit";
import { AppData } from "../types/state";
import { NameSpace } from "../const";

const initialState: AppData = {
  isLoading: true,
  isPostsLoading: false,
  posts: []
};

export const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostsLoadingStatus: (state, action) => {
      state.isPostsLoading = action.payload;
    },
  },
});

export const { setLoadingStatus, setPosts, setPostsLoadingStatus } = appData.actions;