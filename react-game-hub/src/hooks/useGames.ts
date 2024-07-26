import useData from "./useData.ts";
import {Genre} from "./useGenres.ts";

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

const useGames = (selectedGenre: Genre | null) => {
    return useData<Game>('/games',
        { params: { genres: selectedGenre?.id } },
        [selectedGenre?.id]
        )
}

export default useGames;