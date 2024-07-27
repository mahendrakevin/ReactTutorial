import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client.ts";
import genres from "../data/genres.ts";

export interface Genre {
    id: number
    name: string
    image_background: string
}


// const useGenres = () => useData<Genre>('/genres')
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient
        .get('/genres')
        .then<FetchResponse<Genre>>(res => res.data),
    staleTime: 10 * 1000, // 10s
    initialData: {count: genres.length, results: genres}
})

export default useGenres