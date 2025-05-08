import {useEffect, useState} from "react";
import {ICommentDJ} from "../../Models/ICommentDJ/ICommentDJ.ts";
import {GetCommentsDJ} from "../../services/api.service.tsx";
import ComponentCommentDJ from "../ComponentCommentDJ/ComponentCommentDJ.tsx";

const ComponentCommentsDJ =()=>{
    const [comments, setComment] = useState<ICommentDJ[]>([])

    useEffect(() => {
        GetCommentsDJ()
            .then((response)=>setComment(response))


    }, []);

    return(
        <div>
            {comments.map((comment)=><ComponentCommentDJ key={comment.id} comment={comment}/>)}
        </div>
    )

}
export default ComponentCommentsDJ