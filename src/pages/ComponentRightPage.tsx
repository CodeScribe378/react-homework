
import {Outlet} from "react-router-dom";

import ComponentRight from "../components/ComponentRight/ComponentRight.tsx";

const ComponentRightPage =()=>{
    return(
        <div>
            <ComponentRight/>
            <Outlet/>
        </div>
    )
}
export default ComponentRightPage