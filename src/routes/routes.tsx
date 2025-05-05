import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayuot/MainLayout.tsx";
import MenuPage from "../Pages/MenuPage.tsx";
import UsersPage from "../Pages/UsersPage.tsx";
import PostsPage from "../Pages/PostsPage.tsx";
import CommentsPage from "../Pages/CommentsPage.tsx";
import ProductsPage from "../Pages/ProductsPage.tsx";

export const router = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: [
            {index: true, element: <MenuPage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'products', element: <ProductsPage/>}
        ]}
])