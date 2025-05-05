
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ComponentsPosts from "./pages/ComponentsPosts.tsx";
import ComponentsComments from "./pages/ComponentsComments.tsx";
import ComponentsProducts from "./pages/ComponentsProducts.tsx";
import MainLayout from "./MainLayout/MainLayout.tsx";
import ComponentsUsers from "./pages/ComponentsUsers.tsx";


createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>

        <Routes>
    <Route path={'/'} element={<MainLayout/>}>
        <Route path={'users'} element={<ComponentsUsers/>}/>
        <Route path={'posts'} element={<ComponentsPosts/>}/>
        <Route path={'comments'} element={<ComponentsComments/>}/>
        <Route path={'products'} element={<ComponentsProducts/>}/>

    </Route>
    </Routes>

</BrowserRouter>)