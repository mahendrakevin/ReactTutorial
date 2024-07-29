import {keepPreviousData, useInfiniteQuery} from "@tanstack/react-query";
import {Platform} from "./usePlatforms.ts";
import APIClient, {FetchResponse} from "../services/api-client.ts";
import ms from "ms";
import useGameQueryStore from "../store.ts";

export interface Game {
    id: number
    name: string,
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
    rating_top: number
    rating: number
}

export interface FetchGamesResponse {
    count: number
    results: Game[]
}

const apiClient = new APIClient<Game>('/games')

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)

    return useInfiniteQuery<FetchResponse<Game>>({
        queryKey: ['games', gameQuery],
        // initialPageParam: 1,
        queryFn: ({pageParam = 1}) => apiClient.getAll({
            params:
                {
                    genres: gameQuery.genreId,
                    platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }
        }),
        placeholderData: keepPreviousData,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        },
        staleTime: ms('24h'), // 24 hours
    })
}

export default useGames;