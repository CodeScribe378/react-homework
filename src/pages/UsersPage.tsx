import {Outlet} from "react-router-dom";
import UsersComponents from "../components/UsersComponents/UsersComponents.tsx";



const UsersPage =()=>{

    return(
        <div>
     <UsersComponents/>
    <Outlet/>
        </div>


    )
}
export default UsersPage