import { useLocation } from "react-router";
import { PostsListWithLoader } from "../components/PostList";
import { useGetPostsQuery } from "../services/postsApi.service";

const POSTS_LIMIT = 10;

export const PostsPage = (): React.ReactElement | null => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const limit = searchParams.get('limit') || POSTS_LIMIT;
    const { data: posts, isLoading } = useGetPostsQuery();
    const limitedPosts = posts?.slice(0, Number(limit));

    return <PostsListWithLoader isLoading={isLoading} posts={limitedPosts} />
}