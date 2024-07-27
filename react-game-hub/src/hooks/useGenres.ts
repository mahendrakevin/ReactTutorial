import {useQuery} from "@tanstack/react-query";
import genres from "../data/genres.ts";
import APIClient from "../services/api-client.ts";
import ms from 'ms'

export interface Genre {
    id: number
    name: string
    image_background: string
}

const apiClient = new APIClient<Genre>('/genres')

// const useGenres = () => useData<Genre>('/genres')
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24h
    initialData: genres
})

export default useGenres