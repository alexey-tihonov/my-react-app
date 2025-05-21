import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../services/postsApi.service";
import { rootReducer } from "./root-reducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware)
})