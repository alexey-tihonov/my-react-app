import { PostsListWithLoader } from "../components/PostList";
import { useGetPostsQuery } from "../services/postsApi.service";


export const HomePage = (): React.ReactElement | null => {
    const { data: posts, isLoading } = useGetPostsQuery();
    const limitedPosts = posts?.slice(0, 3);

    return <PostsListWithLoader isLoading={isLoading} posts={limitedPosts} />
}