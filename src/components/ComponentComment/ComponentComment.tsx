import {IComment} from "../../models/IComment.ts";
import {FC} from "react";
import './ComponentComment.css'

type MyPropTypeComment ={
    comment: IComment
}


const ComponentComment: FC<MyPropTypeComment> = ({comment})=>{
    return(
        <div><h3>{comment.postId}</h3>
            <h3> {comment.name}</h3>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
        </div>
    )
}
export default ComponentComment