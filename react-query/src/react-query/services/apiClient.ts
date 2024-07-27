import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = () => {
        return axiosInstance.get<T[]>(this.endpoint)
            .then(res => res.data)
    }

    post = (data: T) => {
        return axiosInstance
            .post<T>(this.endpoint, data)
    }
}

export default ApiClient;