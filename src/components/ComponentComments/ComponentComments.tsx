import {useEffect, useState} from "react";
import {IComment} from "../../models/IComment.ts";
import {GetComments} from "../../services/api.service.ts";
import ComponentComment from "../ComponentComment/ComponentComment.tsx";


const ComponentComments =()=>{

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(()=>{
        GetComments()
            .then((response)=>{
                setComments(response)
            })

    },[])

return(
    <div>
        {comments.map((comment)=><ComponentComment key={comment.id} comment={comment}/>)}
    </div>
)


}
export default ComponentComments