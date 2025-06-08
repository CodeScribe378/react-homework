
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './index.css'
import {routes} from "./routes/routes.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store/store.tsx";

createRoot(document.getElementById('root')!).render(<Provider store={store}>
    <RouterProvider router={routes}/>
    </Provider>
)
