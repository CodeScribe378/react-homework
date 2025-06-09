import {MenuComponent} from "../components/MenuComponent/MenuComponent.tsx";
import {Outlet} from "react-router-dom";


const MainLayoutComponent =()=>{
    return(
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    )
}
export default MainLayoutComponent