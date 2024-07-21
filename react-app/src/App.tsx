// import Message from "./Message";
// import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";

function App() {
    // let items = [
    //     "New York",
    //     "Los Angeles",
    //     "Chicago",
    //     "Houston",
    //     "Phoenix",
    // ];
    //
    // const handleSelectItem = (item: string) => {
    //     console.log(item);
    // }

    // return <div><ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/></div>
    return <div>
        <Alert>
            Hello <span>World</span>
        </Alert>
    </div>
}

export default App;