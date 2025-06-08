import {IComment} from "../../IModels/IComments/IComment.ts";
import {FC} from "react";


type CommentType={
    comment: IComment
}

export const CommentComponent: FC<CommentType> =({comment})=>{
    return (
        <div><h3>{comment.name}</h3>
            {comment.body}
        </div>
    )
}



