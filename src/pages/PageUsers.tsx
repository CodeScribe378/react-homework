import ComponentMenuUsers from "../components/ComponentMenuUsers/ComponentMenuUsers.tsx";
import {Outlet} from "react-router-dom";

const PageUsers=()=>{
    return (
        <div>
            <ComponentMenuUsers/>
            <Outlet/>
        </div>

    )
}
export default PageUsers