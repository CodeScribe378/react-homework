
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route} from "react-router-dom";
import ComponentsUsers from "./pages/ComponentsUsers.tsx";
import ComponentsPosts from "./pages/ComponentsPosts.tsx";
import ComponentsComments from "./pages/ComponentsComments.tsx";
import ComponentsProducts from "./pages/ComponentsProducts.tsx";
// import App from './App.tsx'

createRoot(document.getElementById('root')!)
.render (<BrowserRouter>
    <Route path={'/'}>
        <Route path={'users'} element={<ComponentsUsers/>}/>
        <Route path={'posts'} element={<ComponentsPosts/>}/>
        <Route path={'comments'} element={<ComponentsComments/>}/>
        <Route path={'products'} element={<ComponentsProducts/>}/>

    </Route>
</BrowserRouter>)