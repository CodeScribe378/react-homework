
import {createBrowserRouter} from "react-router-dom";
import MainLayoutComponent from "../MainLayout/MainLayoutComponent.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import ComplexPage from "../pages/ComplexPage.tsx";
export const routes =createBrowserRouter([
    {path:'/', element: <MainLayoutComponent/>, children:[
            {index: true, element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'complex', element: <ComplexPage/>},
        ]}
])