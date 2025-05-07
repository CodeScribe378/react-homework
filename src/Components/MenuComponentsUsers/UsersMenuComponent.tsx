import {Link} from "react-router-dom";

const UsersMenuComponent =()=>{
    return(
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>UsersJSON</Link></li>
                <li><Link to={'dummyjson'}>UsersDummyJSON</Link></li>
            </ul>
        </div>


    )
}
export default UsersMenuComponent