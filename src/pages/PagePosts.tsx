import {Outlet} from "react-router-dom";
import MenuComponentPosts from "../Components/MenuPostsComponents/MenuComponentPosts.tsx";

const PagePosts=()=>{
    return(
        <div>
            <MenuComponentPosts/>
            <hr/>
            <Outlet/>
        </div>
    )
}
export default PagePosts