import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client.ts";

export interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient
        .get('/platforms/lists/parents')
        .then<FetchResponse<Platform>>(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 10s
    initialData: {count: 0, results: []}
})

export default usePlatforms