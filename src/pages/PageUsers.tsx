import {Outlet} from "react-router-dom";
import UsersMenuComponent from "../Components/MenuComponentsUsers/UsersMenuComponent.tsx";

const PageUsers =()=>{
    return(
        <div>
            <UsersMenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    )
}
export default PageUsers