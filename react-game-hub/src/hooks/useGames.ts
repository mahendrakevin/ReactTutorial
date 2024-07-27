import {gameQuery} from "../App.tsx";
import {keepPreviousData, useInfiniteQuery} from "@tanstack/react-query";
import {Platform} from "./usePlatforms.ts";
import APIClient, {FetchResponse} from "../services/api-client.ts";

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

const useGames = (gameQuery: gameQuery) => {
    return useInfiniteQuery<FetchResponse<Game>>({
        queryKey: ['games', gameQuery],
        initialPageParam: 1,
        queryFn: ({pageParam = 1}) => apiClient.getAll({
            params:
                {
                    genres: gameQuery.genre?.id,
                    platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }
        }),
        placeholderData: keepPreviousData,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        }
    })
}

export default useGames;