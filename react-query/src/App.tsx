import './App.css';
import TodoList from "./react-query/TodoList";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/counter/Counter";
import {useReducer} from "react";
import Navbar from "./state-management/NavBar";
import {TaskList, TaskProvider} from "./state-management/tasks";

function App() {
    return (
        <>
            <TaskProvider>
                <Counter/>
                <Navbar/>
                {/*<HomePage/>*/}
                <TaskList/>
            </TaskProvider>
        </>
    )
}

export default App;
