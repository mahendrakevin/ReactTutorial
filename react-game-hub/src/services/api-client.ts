import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '31078de53ce943d3986aabe0ae8e2d73'
    }
})

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }

}


export default APIClient