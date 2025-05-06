import {Link} from "react-router-dom";

const MenuComponent=()=>{
    return(
        <div>
            <ul>
                <li><Link to={'/users'}>USERS</Link></li>
            </ul>
        </div>
    )


}
export default MenuComponent