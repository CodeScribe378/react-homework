import {Link} from "react-router-dom";

const ComponentMenuComments =()=>{
    return(
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>CommentsJSON</Link></li>
                <li><Link to={'dummyjson'}>Comments DummyJSON</Link></li>
            </ul>
        </div>
    )
}
export default ComponentMenuComments
