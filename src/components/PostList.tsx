import { withLoader } from "../hocs/withLoader";

export interface IPost {
    "id": number,
    "userId": number,
    "title": string,
    "body": string,
}

export type PostListProps = {
    className?: string;
    posts?: IPost[];
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