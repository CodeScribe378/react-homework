import {Outlet} from "react-router-dom";
import MenuComponentPosts from "../components/MenuComponentPosts/MenuComponentPosts.tsx";

const PagePosts =()=>{
    return(
        <div>
            <MenuComponentPosts/>
            <Outlet/>
        </div>
    )
}
export default PagePosts