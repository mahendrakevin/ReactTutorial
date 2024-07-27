import {useQuery} from "@tanstack/react-query";
import genres from "../data/genres.ts";
import APIClient from "../services/api-client.ts";

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
    staleTime: 10 * 1000, // 10s
    initialData: genres
})

export default useGenres