import { combineReducers } from "@reduxjs/toolkit/react";
import { appData } from "./app-data";
import { postsApi } from "../services/postsApi.service";
import { NameSpace } from "../const";

export const rootReducer = combineReducers({
    [NameSpace.App]: appData.reducer,
    [postsApi.reducerPath]: postsApi.reducer
});