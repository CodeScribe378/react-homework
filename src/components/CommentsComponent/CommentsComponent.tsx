import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {actionsCommentSlice} from "../../redux/slices/commentSlice.ts";
import CommentComponent from "../CommentComponent/CommentComponent.tsx";


const CommentsComponent =()=>{

   const {comments}= useAppSelector(state =>state.commentSlice)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(actionsCommentSlice.loadComments())
    }, []);

    return(
        <div>
            {comments.map((comment)=><CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    )
}
export default CommentsComponent