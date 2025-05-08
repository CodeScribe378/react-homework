import {useEffect, useState} from "react";
import {ICommentJS} from "../../Models/ICommentJS/ICommentJS.ts";
import {GetCommentsJS} from "../../services/api.service.tsx";
import {ComponentCommentJS} from "../ComponentCommentJS/ComponentCommentJS.tsx";

const ComponentCommentsJS = ()=>{

    const [comments, setComments] = useState<ICommentJS[]>([])

    useEffect(() => {

        GetCommentsJS()
            .then((response)=>setComments(response))

    }, []);

    return(
        <div>
            {comments.map((comment)=><ComponentCommentJS key={comment.id} comment={comment}/>)}
        </div>
    )

}
export default ComponentCommentsJS