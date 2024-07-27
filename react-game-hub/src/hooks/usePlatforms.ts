import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";

export interface Platform {
    id: number
    name: string
    slug: string
}

const apiClient = new APIClient<Platform>('/platforms')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 10s
    // initialData: {count: 0, results: []}
})

export default usePlatforms