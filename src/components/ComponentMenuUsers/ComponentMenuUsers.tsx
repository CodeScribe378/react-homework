import {Link} from "react-router-dom";

const ComponentMenuUsers =()=>{
    return(
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>UsersJSON</Link></li>
                <li><Link to={'dummyjson'}>UsersDummyJson</Link></li>
            </ul>
        </div>


    )
}
export default ComponentMenuUsers