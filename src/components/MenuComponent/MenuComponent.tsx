import {Link} from "react-router-dom";

const MenuComponent =()=>{
    return(
        <ul>
            <li><Link to={'/'}>Home Page</Link></li>
            <li><Link to={'/login'}>Login Page</Link></li>
            <li><Link to={'/auth/resources'}>Auth Resources</Link></li>
        </ul>
    )
}
export default MenuComponent