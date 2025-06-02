import {Link} from "react-router-dom";

const MenuComponent =()=>{
    return(
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/leftPage'}>left page</Link></li>
                <li><Link to={'/leftPage/a'}>page left a </Link></li>
                <li><Link to={'/rightPage'}>right page</Link></li>
                <li><Link to={'/rightPage/a'}>right page a</Link></li>

            </ul>
        </div>
    )
}
export default MenuComponent