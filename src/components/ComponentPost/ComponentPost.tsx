import {IPost} from "../../Models/IPost.ts";
import {FC} from "react";

import './ComponentPost.css'
type ComponentPostType={
    post: IPost
}


const ComponentPost: FC<ComponentPostType> =({post})=>{
    return(
        <div><h3>{post.userId} - {post.title} </h3>
            <p>{post.body}</p></div>

    )
}
export default ComponentPost