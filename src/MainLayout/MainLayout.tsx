import {Outlet} from "react-router-dom";
import MenuComponent from "../components/Menu/Menu.tsx";

const MainLayout =()=>{
    return(
        <div>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    )
}
export default MainLayout