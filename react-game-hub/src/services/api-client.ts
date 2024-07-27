import axios from "axios";

export interface FetchResponse<T> {
    count: number
    results: T[]
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '31078de53ce943d3986aabe0ae8e2d73'
    }
})