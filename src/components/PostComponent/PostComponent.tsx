import {IPosts} from "../../IModels/IPosts/IPosts.ts";
import {FC} from "react";


type PostType={
    post: IPosts
}

const PostComponent: FC<PostType> =({post})=>{
    return(
        <div>
            <h4>{post.title}</h4>
            <p>{post.title}</p>
        </div>
    )
}
export default PostComponent