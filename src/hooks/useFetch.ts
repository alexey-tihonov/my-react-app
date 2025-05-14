import { useEffect, useMemo, useRef, useState } from "react";

export const useFetch = <T extends {}>(url: string) => {
    const isFetched = useRef(false)
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<T>();

    useEffect(() => {
        if (!isFetched.current) {
            setIsLoading(true);
            fetch(url)
                .then((response) => response.json())
                .then((data: T) => {
                    setData(data);
                    setIsLoading(false);
                });
            isFetched.current = true;
        }
    }, []);

    return useMemo(() => ({ data, isLoading }), [data, isLoading]);
}