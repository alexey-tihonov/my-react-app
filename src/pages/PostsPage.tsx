import { useLocation } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { PostsListWithLoader, type IPost } from "../components/PostList";

const POSTS_LIMIT = 10;

export const PostsPage = (): React.ReactElement | null => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const limit = searchParams.get('limit') || POSTS_LIMIT;
    const { data: posts, isLoading } = useFetch<IPost[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

    return <PostsListWithLoader isLoading={isLoading} posts={posts} />
}