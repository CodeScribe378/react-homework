import {Link} from "react-router-dom";

const MenuComponentPosts =()=>{
    return(
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>PostJSON</Link></li>
                <li><Link to={'dummyjson'}>PostDummyJSON</Link></li>
            </ul>
        </div>
    )
}
export default MenuComponentPosts