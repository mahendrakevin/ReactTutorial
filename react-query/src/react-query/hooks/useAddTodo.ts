import {useMutation, useQueryClient} from "@tanstack/react-query";
import {CACHE_KEY_TODOS} from "../constants";
import ApiClient from "../services/apiClient";
import todoService, {Todo} from "../services/todoService";

interface AddTodoContext {
    previousTodos: Todo[]
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: todoService.post,
        // Optimistic update
        onMutate: (newTodo: Todo) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || []

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS,
                todos => [newTodo, ...(todos || [])])
            onAdd()

            return {previousTodos}
        },
        onSuccess: (savedTodo, newTodo) => {
            // Approac: Invalidate the cache
            // queryClient.invalidateQueries({
            //     queryKey: CACHE_KEY_TODOS
            // })

            // Approach 2: Update the data in the cache
            // queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS,
            //     todos => [savedTodo, ...(todos || [])])
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, todos => todos?.map(
                todo => todo === newTodo ? savedTodo : todo
            ))
        },
        onError: (error, newTodo, context) => {
            if (!context) return;

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos)
        }
    })
}

export default useAddTodo;