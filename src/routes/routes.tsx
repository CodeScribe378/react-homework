import {createBrowserRouter} from "react-router-dom";
import ComponentLeftPageA from "../pages/ComponentLeftPageA.tsx";
import ComponentLeftPage from "../pages/ComponentLeftPage.tsx";
import ComponentRightPage from "../pages/ComponentRightPage.tsx";
import ComponentRightPageA from "../pages/ComponentRightPageA.tsx";
import MainLayout from "../MainLayout/MainLayout.tsx";

export const routes = createBrowserRouter([
    {path: '/' , element:<MainLayout/>, children:[
            {path: 'leftPage', element:<ComponentLeftPage/>, children:[
                    {path: 'a', element:<ComponentLeftPageA/>}
                ]},
            {path: 'rightPage', element:<ComponentRightPage/>, children:[
                    {path:'a', element:<ComponentRightPageA/>}
                ]}
        ]}

])


