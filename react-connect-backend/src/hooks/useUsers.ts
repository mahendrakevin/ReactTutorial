import {useEffect, useState} from "react";
import userService, {User} from "../services/user-service.ts";
import {CanceledError} from "../services/api-client.ts";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // get -> promise -> res / err
        setIsLoading(true);
        const {cancel, request} = userService.getAll<User>();

        request
            .then(response => {
                setUsers(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setIsLoading(false)
            })

        return () => cancel();
    }, []);

    return {users, error, isLoading, setUsers, setError}
}

export default useUsers;