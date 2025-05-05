
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout.tsx";
import UsersPage from "./pages/UsersPage/UsersPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import CommentPage from "./pages/CommentPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";

const router = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
           {path: 'comments', element: <CommentPage/>},
            {path: 'products', element: <ProductsPage/>}
        ]}
])


createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)
