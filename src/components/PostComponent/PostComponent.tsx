import {IPost} from "../../Models/IPosts/IPost.ts";
import {FC} from "react";


type PostType={
    post: IPost
}

const PostComponent: FC<PostType> =({post})=>{
    return(
        <div>
            {post.body}
        </div>
    )
}
export default PostComponent