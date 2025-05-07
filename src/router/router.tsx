import {createBrowserRouter} from "react-router-dom";
import MainLayoutComponent from "../MainLayoutComponent/MainLayoutComponent.tsx";
import PageUsers from "../pages/PageUsers.tsx";
import UsersPageJson from "../pages/UsersPageJson.tsx";
import UsersPageDummyJs from "../pages/UsersPageDummyJs.tsx";
import PagePosts from "../pages/PagePosts.tsx";
import PagePostJson from "../pages/PagePostJson.tsx";
import PagePostDummyJs from "../pages/PagePostDummyJs.tsx";
import CommentsPageJson from "../pages/CommentsPageJson.tsx";
import CommentsPageDummyJs from "../pages/CommentsPageDummyJs.tsx";
import PageComments from "../pages/PageComments.tsx";


const route = createBrowserRouter([
    {path:'/', element: <MainLayoutComponent/>, children:[
            {path:'users', element: <PageUsers/>, children:[
                    {path: 'jsonplaceholder', element: <UsersPageJson/>},
                    {path: 'dummyjson', element: <UsersPageDummyJs/>}
                ]},
            {path:'posts', element:<PagePosts/>, children:[
                    {path: 'jsonplaceholder', element: <PagePostJson/>},
                    {path: 'dummyjson', element:<PagePostDummyJs/> }
                ]},
            {path:'comments', element: <PageComments/>, children:[
                    {path: 'jsonplaceholder', element: <CommentsPageJson/>},
                    {path: 'dummyjson', element:<CommentsPageDummyJs/> }

                ] },

        ] }

])
export default route

