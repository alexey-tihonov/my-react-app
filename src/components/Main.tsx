import { useEffect, useRef, useState } from "react";

interface IPost {
    "id": number,
    "userId": number,
    "title": string,
    "body": string,
}

export const Main = (): React.ReactElement => {
    const isFetched = useRef(false)
    const [posts, setPosts] = useState<IPost[]>();

    useEffect(() => {
        if (!isFetched.current) {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((allPosts: IPost[]) => {
                    // Сохраняем только первые 10 постов
                    const filteredPosts = allPosts.slice(0, 10);
                    setPosts(filteredPosts) 
                });

                
            isFetched.current = true;
        }
    }, []);

    return (
        <main className='content'>
            <ul>
                {posts?.map((item) => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </main>
    )
}