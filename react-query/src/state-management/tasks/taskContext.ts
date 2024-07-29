import {Dispatch} from "react";
import React from "react";
import {Task, TaskAction} from "./TaskProvider";

interface TasksContextType {
    tasks: Task[],
    dispatch: Dispatch<TaskAction>
}

const TaskContext = React.createContext<TasksContextType>({} as TasksContextType)

export default TaskContext