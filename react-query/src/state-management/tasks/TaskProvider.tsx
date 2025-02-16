import {ReactNode, useReducer} from "react";
import TaskContext from "./taskContext";

interface Props {
    children: ReactNode
}

export interface Task {
    id: number;
    title: string;
}

interface AddTask {
    type: 'ADD'
    task: Task
}

interface DeleteTask {
    type: 'DELETE'
    taskId: number
}

export type TaskAction = AddTask | DeleteTask

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case 'ADD':
            return [action.task, ...tasks]
        case 'DELETE':
            return tasks.filter(t => t.id !== action.taskId)
    }
}

const TaskProvider = ({children}: Props) => {
    const [tasks, dispatch] = useReducer(taskReducer, [])

    return (
        <TaskContext.Provider value={{tasks, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;