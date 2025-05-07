import {ICommentJS} from "../../Models/ICommentJS/ICommentJS.ts";
import {FC} from "react";
import './ComponentCommentJS.css'

type ComponentCommentJS ={
    comment: ICommentJS
}


export const ComponentCommentJS: FC<ComponentCommentJS> =({comment})=>{

    return (
        <div>
            <p>{comment.postId}</p>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    )
}

