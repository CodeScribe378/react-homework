import {createBrowserRouter} from "react-router-dom";
import MainLayoutComponent from "../MainLayoutComponent/MainLayuotComponent.tsx";
import PageUsers from "../pages/PageUsers.tsx";
import PagePosts from "../pages/PagePosts.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UserPageJson from "../pages/UserPageJson.tsx";
import UserPageDummyJs from "../pages/UserPageDummyJs.tsx";
import PagePostJson from "../pages/PagePostJson.tsx";
import PagePostDummyJs from "../pages/PagePostDummyJs.tsx";

export const route = createBrowserRouter([
    {path:'/', element: <MainLayoutComponent/>, children:[
            {path:'users', element: <PageUsers/>, children:[
                    {path: 'jsonplaceholder', element: <UserPageJson/>},
                    {path: 'dummyjson', element: <UserPageDummyJs/>}
                ]},
            {path:'posts', element:<PagePosts/>, children:[
                    {path: 'jsonplaceholder', element: <PagePostJson/>},
                    {path: 'dummyjson', element:<PagePostDummyJs/> }
                ]},
            {path:'comments/jsonplaceholder', element: <CommentsPage/> },

        ] }

])
