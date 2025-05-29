import {FC} from "react";
import {IPosts} from "../IModels/IPosts.ts";


type TypePost={
   post: IPosts
}

const ComponentPost: FC<TypePost> =({post})=>{
    return(
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}
export default ComponentPost