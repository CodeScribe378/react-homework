import ComponentLeft from "../components/ComponentLeft/ComponentLeft.tsx";
import {Outlet} from "react-router-dom";

const ComponentLeftPage =()=>{
    return(
        <div>
            <ComponentLeft/>
            <Outlet/>
        </div>
    )
}
export default ComponentLeftPage