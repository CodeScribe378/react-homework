import {IPost} from "../../Models/IPost/IPost.ts";
import {FC} from "react";

type PostType ={
    post: IPost
}

const ComponentPost: FC<PostType> =({post})=>{
    return (
        <div>  <h4>{post.title}</h4>
            <p> {post.title}</p>
           </div>
    )
}
export default ComponentPost