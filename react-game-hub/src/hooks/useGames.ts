import useData from "./useData.ts";
import {gameQuery} from "../App.tsx";

export interface Game {
    id: number
    name: string,
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number

}

export interface FetchGamesResponse {
    count: number
    results: Game[]
}

export interface Platform {
    id: number
    name: string
    slug: string
}

const useGames = (gameQuery: gameQuery) => {
    return useData<Game>('/games',
        {
            params:
                {
                    genres: gameQuery.genre?.id,
                    platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText
                }
        },
        [gameQuery]
    )
}

export default useGames;