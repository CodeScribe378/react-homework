import {Link} from "react-router-dom";

const ComponentMenu=()=>{
    return(
        <div>
            <ul>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
                <li><Link to={'/comments/jsonplaceholder'}>Comments</Link></li>
            </ul>
        </div>
    )
}
export default ComponentMenu