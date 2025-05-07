import {ICommentDJ} from "../../Models/ICommentDJ/ICommentDJ.ts";
import {FC} from "react";

type TypeCommentDJ ={
    comment: ICommentDJ
}



const ComponentCommentDJ: FC<TypeCommentDJ> =({comment})=>{

    return (
        <div>
            <p>postId: {comment.postId} - {comment.body}</p>
            <p>likes: {comment.likes}</p>
            <p> USER: {comment.user.id} - {comment.user.username} - {comment.user.fullName}</p>

        </div>
    )
}
export default ComponentCommentDJ

