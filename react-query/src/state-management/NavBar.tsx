import {useContext} from "react";
import TaskContext from "./tasks/taskContext";
import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";
import counter from "./counter/Counter";

const NavBar = () => {
    const {tasks} = useContext(TaskContext)
    const counter = useCounterStore(s => s.counter)

    console.log('NavBar rendered')

    return (
        <nav className="navbar d-flex justify-content-between">
            <span className="badge text-bg-secondary">{counter}</span>
            <LoginStatus/>
        </nav>
    );
};

export default NavBar;
