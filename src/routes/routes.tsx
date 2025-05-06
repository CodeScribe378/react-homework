import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout.tsx";
import CartsPage from "../pages/CartsPage/CartsPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";

export const router= createBrowserRouter([
    {path: '/', element: <MainLayout/>, children:[
            {path:'users', element: <UsersPage/>, children:[
                    {path: ':id/carts', element: <CartsPage/>}
                ]
            }
            ]}
])
