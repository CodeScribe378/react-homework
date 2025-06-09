import {Link} from "react-router-dom";


export const MenuComponent =()=>{
    return(
        <div>
            <ul>
                <li><Link to={'/'}>Menu</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
                <li><Link to={'/complex'}>Complex</Link></li>
            </ul>
        </div>
    )
}
