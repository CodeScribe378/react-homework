import {Link} from "react-router-dom";

const ComponentMenu =()=>{

    return(
        <div>
            <ul>
                <li>
                    <Link to={'/users'}>Users</Link>
                </li>
            </ul>
        </div>
    )
}
export default ComponentMenu