import {IPosts} from "../../Models/IPosts/IPosts.ts";
import {FC} from "react";
import './ComponentPostJS.css'



type TypePostJs = {
    post: IPosts
}


const ComponentPostJS: FC <TypePostJs> = ({post})=>{

    return (
        <div>
            <h4>{post.userId}</h4>
            <h3>{post.title}</h3>
            <p>{post.body}</p></div>
    )
}
export default ComponentPostJS
