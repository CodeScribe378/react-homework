import {useEffect, useState} from "react";
import {IComment} from "../../Models/ModelComment/IComment.ts";
import {GetComments} from "../../services/api.service.ts";
import ComponentComment from "../ComponentComment/ComponentComment.tsx";


const ComponentComments =()=>{

    const [comments, setComments] = useState<IComment[]>([])
    useEffect(()=>{
        // GetComments()
        //     .then((response)=>{
        //         setComments(response)
        //     })

        const fetchComments =async()=>{
            const comments = await GetComments()
            setComments(comments)
        }
         fetchComments()
    }, [])


return(

    <div>
        {comments.map((comment)=><ComponentComment key ={comment.id} value={comment}/>)}
    </div>
)


}
export default ComponentComments