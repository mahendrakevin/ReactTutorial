// import {useState} from "react";
// import {produce} from "immer";
// import Navbar from "./Navbar.tsx";
// import Cart from "./Cart.tsx";
import ExpandableText from "./ExpandableText.tsx";

function App() {
    // const [game, setGame] = useState({
    //     id: 1,
    //     player: {
    //         name: "John Doe",
    //     }
    // })
    // const handleClick = () => {
    //     setGame({...game, player: { ... game.player, name: "Bob"}});
    // }

    // const [pizza, setPizza] = useState({
    //     name: 'Pizza',
    //     toppings: ['Cheese', 'Pepperoni']
    // })
    //
    // const handleClick = () => {
    //     setPizza({...pizza, toppings: [...pizza.toppings, 'Mushrooms']})
    // }

    // const [cart, setCart] = useState({
    //    discount: .1,
    //    items: [
    //         {id: 1, title: 'Pizza', price: 10},
    //         {id: 2, title: 'Burger', price: 5},
    //    ]
    // });
    //
    // const handleClick = () => {
    //     setCart({...cart, items: cart.items.map(
    //         item => item.id === 1 ? {...item, price: item.price + 1} : item
    //     )})
    // }

    // const [bugs, setBugs] = useState([
    //     {id: 1, description: 'Bug 1'},
    //     {id: 2, description: 'Bug 2'},
    // ])
    //
    // const handleClick = () => {
    //     // setBugs(bugs.map(
    //     //     bug => bug.id === 1 ? {...bug, description: 'Bug 1 updated'} : bug
    //     // ))
    //
    //     setBugs(produce(draft => {
    //         const bug = draft.find(bug => bug.id === 1);
    //         if (bug) {
    //             bug.description = 'Bug 1 updated'
    //         }
    //     }))
    // }

    // const [tags, setTags] = useState(['happy', 'cheerful'])
    //
    // const handleClick = () => {
    //     // Add
    //     setTags([...tags, 'joyful'])
    //
    //     // Remove
    //     setTags(tags.filter(tag => tag !== 'happy'))
    //
    //     // Update
    //     setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
    //
    // }

    // const [customer, setCustomer] = useState({
    //     name: 'John Doe',
    //     address: {
    //         city: 'New York',
    //         country: 'USA'
    //     }
    // })
    //
    // const handleClick = () => {
    //     setCustomer({
    //         ...customer,
    //         address: {...customer.address, country: 'Canada'}
    //     })
    // }

    // const [cartItems, setCartItems] = useState(['Product 1', 'Product 2'])
    //
    // return (
    //     <div>
    //         {/*{bugs.map(bug => <p key={bug.id}>{bug.description}</p>)}*/}
    //         {/*<button onClick={handleClick}>Update</button>*/}
    //         <Navbar cartItemsCount={cartItems.length}/>
    //         <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
    //     </div>
    // )

    return (
        <div>
            <ExpandableText maxChars={10}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in quam id sapien luctus
            </ExpandableText>
        </div>
    )
}

export default App;