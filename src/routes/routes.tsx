
import {createBrowserRouter} from "react-router-dom";
import MainLayoutComponent from "../MainLayout/MainLayoutComponent.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayoutComponent/>, children:[
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]}
])