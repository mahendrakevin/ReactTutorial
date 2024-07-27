import {gameQuery} from "../App.tsx";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {Platform} from "./usePlatforms.ts";

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

const useGames = (gameQuery: gameQuery) => {
    return useQuery({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient
            .get('/games', {
                params:
                    {
                        genres: gameQuery.genre?.id,
                        platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText
                    }
            })
            .then<FetchGamesResponse>(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 10s
        // initialData: {count: 0, results: []}
    })
}

export default useGames;