import {Outlet} from "react-router-dom";
import ComponentMenu from "../components/ComponentMenu/ComponentMenu.tsx";

const MainLayout =()=>{
    return(
        <div>
            <ComponentMenu/>
            <Outlet/>
        </div>
    )
}
export default MainLayout