import {Outlet} from "react-router-dom";
import ComponentMenu from "../Components/ComponentMenu/ComponentMenu.tsx";


const MainLayoutComponent=()=>{
    return(
        <div>
            <ComponentMenu/>
            <Outlet/>
        </div>
    )
}
export default MainLayoutComponent