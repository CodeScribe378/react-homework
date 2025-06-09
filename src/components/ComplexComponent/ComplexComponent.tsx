import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {actionsUserSlice} from "../../redux/slices/userSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {actionsPostSlice} from "../../redux/slices/postSlice.ts";
import {actionsCommentSlice} from "../../redux/slices/commentSlice.ts";
import UserComponent from "../UserComponent/UserComponent.tsx";
import PostComponent from "../PostComponent/PostComponent.tsx";
import CommentComponent from "../CommentComponent/CommentComponent.tsx";


const ComplexComponent =()=>{

   const{userSlice: {users},postSlice:{posts} ,commentSlice:{comments}} = useAppSelector(state=>state)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if(!users.length){
            dispatch(actionsUserSlice.loadUsers())
        }
        if(!posts.length){
            dispatch(actionsPostSlice.loadPosts())
        }
        if(!comments.length){
            dispatch(actionsCommentSlice.loadComments())
        }

    }, []);

    return(
        <div>
            <h2>Users</h2>
            {users.map((user)=><UserComponent key= {user.id} user={user}/>)}
            <h2>Posts</h2>
            {posts.map((post)=><PostComponent key={post.id} post={post}/>)}
            <h2>comments</h2>
            {comments.map((comment)=><CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    )
}
export default ComplexComponent