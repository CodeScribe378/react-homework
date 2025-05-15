import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout.tsx";
import PageCars from "../pages/PageCars.tsx";
import PageCreateCar from "../pages/PageCreateCar.tsx";


export const routes = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {path: 'cars', element: <PageCars/>},
            {path: 'cars/create', element: <PageCreateCar/>}
        ]}
])
