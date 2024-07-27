import {keepPreviousData, useInfiniteQuery, useQuery} from "@tanstack/react-query";
import axios from "axios";

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface PostQuery {
    pageSize: number,
}

const usePosts = (
    query: PostQuery,
) => {
    // return useQuery<Post[], Error>({
    //     queryKey: ['posts', query],
    //     queryFn: () => axios
    //         .get('https://jsonplaceholder.typicode.com/posts', {
    //             params: {
    //                 _start: (query.page - 1) * query.pageSize,
    //                 _limit: query.pageSize
    //             }
    //         })
    //         .then(res => res.data),
    //     staleTime: 1 * 60 * 1000, // 1 minute
    //     placeholderData: keepPreviousData,
    // })

    // @ts-ignore
    return useInfiniteQuery<Post[], Error>({
        queryKey: ['posts', query],
        initialPageParam: 1,
        queryFn: ({ pageParam = 1 }) =>
            axios
                .get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _start: (pageParam - 1) * query.pageSize,
                        _limit: query.pageSize,
                    },
                })
                .then((res) => res.data),
        staleTime: 1 * 60 * 1000, //1m
        placeholderData: keepPreviousData,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0
                ? allPages.length + 1
                : undefined;
        },
    })
}

export default usePosts;