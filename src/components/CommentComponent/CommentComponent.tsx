import {IComments} from "../../Models/IComments/IComments.ts";
import {FC} from "react";


type CommentType={
    comment: IComments
}

const CommentComponent: FC<CommentType> =({comment})=>{
    return(
        <div>
            <h4>{comment.name}</h4>
           <p>{comment.body}</p></div>
    )
}
export default CommentComponent