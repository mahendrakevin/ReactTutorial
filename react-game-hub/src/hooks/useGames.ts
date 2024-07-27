import {gameQuery} from "../App.tsx";
import {useQuery} from "@tanstack/react-query";
import {Platform} from "./usePlatforms.ts";
import APIClient from "../services/api-client.ts";

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
    return useQuery({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.getAll({
            params:
                {
                    genres: gameQuery.genre?.id,
                    platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText
                }
        }),
        staleTime: 24 * 60 * 60 * 1000, // 10s
        // initialData: {count: 0, results: []}
    })
}

export default useGames;