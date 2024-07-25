import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ProductList from "./components/ProductList.tsx";
import userService, {User} from "./services/user-service.ts";
import useUsers from "./hooks/useUsers.ts";

// const connect = () => console.log('Connecting to the backend...')
// const disconnect = () => console.log('Disconnecting from the backend...')


function App() {
    // const [category, setCategory] = useState('')
    //
    // return (
    //     <>
    //         <div>
    //             <select className="form-select" onChange={(event) => setCategory(event.target.value)}>
    //                 <option value="">All</option>
    //                 <option value="Clothing">Clothing</option>
    //                 <option value="Electronics">Electronics</option>
    //                 <option value="Books">Books</option>
    //             </select>
    //             <ProductList category={category}/>
    //         </div>
    //     </>
    // )

    // Prevent memory leak
    // useEffect(() => {
    //     connect()
    //     return () => {
    //         disconnect()
    //     }
    // }, []);
    //
    // return (
    //     <div></div>
    // )

    const {
        users,
        error,
        isLoading,
        setUsers,
        setError
    } = useUsers();

    const deleteUser = (user: User) => {
        const originalUsers = [...users]
        setUsers(users.filter(u => u.id !== user.id))

        userService.delete(user.id)
            .catch(error => {
                setError(error.message)
                setUsers(originalUsers)
            })
    }

    const addUser = () => {
        const originalUsers = [...users]
        const newUser = {id: users.length + 1, name: 'Kevin'}
        setUsers([newUser, ...users])
        userService.create(newUser)
            .then(({data: savedUser}) => setUsers([savedUser, ...users]))
            .catch(error => {
                setError(error.message)
                setUsers(originalUsers)
            })
    }

    const updateUser = (user: User) => {
        const originalUsers = [...users]
        const updatedUser = {...user, name: user.name + '!'}
        setUsers(users.map(u => u.id === user.id ? updatedUser : u))
        userService.update(user.id, updatedUser)
            .catch(error => {
                setError(error.message)
                setUsers(originalUsers)
            })
    }

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
            <ul className="list-group">
                {users.map(user => (
                    <li key={user.id} className="list-group-item d-flex justify-content-between">
                        {user.name}
                        <div>
                            <button className="btn btn-outline-secondary mx-1" onClick={() => updateUser(user)}>Edit
                            </button>
                            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default App
