import { withLoader } from "../hocs/withLoader";
import { Post } from "../types/post";

export type PostListProps = {
    className?: string;
    posts?: Post[];
}

export const PostList = ({ className, posts = [] }: PostListProps): React.ReactElement => {
    return (
        <ul className={className}>
            {posts?.map((item) => (
                <li key={item.id}>
                    {item.title}
                </li>
            ))}
        </ul>
    )
}

export const PostsListWithLoader = withLoader(PostList);