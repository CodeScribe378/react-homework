import {Outlet} from "react-router-dom";
import ComponentMenuComments from "../Components/ComponentMenuComments/ComponentMenuComments.tsx";

const PageComments =()=>{
    return(
        <div>
            <ComponentMenuComments/>
            <hr/>
            <Outlet/>
        </div>
    )
}
export default PageComments