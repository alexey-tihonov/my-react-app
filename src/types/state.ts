import { store } from "../store";
import { Post } from "./post";

export type AppData = {
    isLoading: boolean;
    isPostsLoading: boolean;
    posts: Post[];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;