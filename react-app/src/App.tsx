// import Message from "./Message";
import ListGroup from "./components/Listgroup";
import './App.css'
// import Alert from "./components/Alert.tsx";
// import Button from "./components/Button.tsx";
// import Alert from "./components/Alert.tsx";
// import {useState} from "react";

function App() {
    let items = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
    ];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    return <div><ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/></div>
    // return <div>
    //     <Alert>
    //         Hello <span>World</span>
    //     </Alert>
    // </div>
    // const [alertVisible, setAlertVisibility] = useState(false);
    // return (
    //     <div>
    //         { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert> }
    //         <Button color="success" onClick={() => setAlertVisibility(true)}>My Button</Button>
    //     </div>
    // )
}

export default App;