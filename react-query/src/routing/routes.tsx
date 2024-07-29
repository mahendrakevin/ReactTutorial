import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserList";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import Userspage from "./Userspage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: "users", element: <Userspage/>, children: [
                {path: ':id', element: <UserDetailPage/>},
                ]
            },
            {path: "contact", element: <ContactPage/>},
            {path: "user/:id", element: <UserDetailPage/>}
        ]
    },
])

export default router;