import { useFetch } from "../hooks/useFetch";
import { PostsListWithLoader, type IPost } from "../components/PostList";


export const HomePage = (): React.ReactElement | null => {
    const { data: posts, isLoading } = useFetch<IPost[]>(`https://jsonplaceholder.typicode.com/posts?_limit=3`);

    return <PostsListWithLoader isLoading={isLoading} posts={posts} />
}