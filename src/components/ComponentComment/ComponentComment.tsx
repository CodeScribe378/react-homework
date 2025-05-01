import {IComment} from "../../Models/ModelComment/IComment.ts";
import {FC} from "react";
import './ComponentComment.css'


type ComponentType={
    value: IComment
}

const ComponentComment: FC<ComponentType> = ({value})=>{
    return (
        <div>
            <h3>{value.body}</h3>
            <p> postId: {value.postId}</p>
            <p>likes: {value.likes}</p>
            <p>User: {value.user.id} - {value.user.username} - {value.user.fullName}</p>
        </div>
    )
}

export default ComponentComment