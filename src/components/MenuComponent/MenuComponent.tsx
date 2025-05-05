import {Link} from "react-router-dom";

const MenuComponent =()=>{
    return(
        <div>
            <div>
                <ul>
                    <li><Link to={''}>Menu</Link></li>
                    <li><Link to={'/users'}>Users</Link></li>
                    <li><Link to={'/posts'}>Posts</Link></li>
                    <li><Link to={'/comments'}>Comments</Link></li>
                    <li><Link to={'/products'}>Products</Link></li>

                </ul>
            </div>
        </div>
    )
}
export default MenuComponent