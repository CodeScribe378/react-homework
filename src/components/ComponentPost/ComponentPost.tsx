import {IPosts} from "../../Models/ModelPosts/IPosts.ts";
import {FC} from "react";

type PostType ={
    post: IPosts
}

const ComponentPost: FC<PostType> =({post})=>{
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}
export default ComponentPost