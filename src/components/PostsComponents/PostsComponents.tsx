import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {actionsPostsSlice} from "../../redux/postSlice/actionsPostsSlice.ts";
import PostComponent from "../PostComponent/PostComponent.tsx";


const PostsComponents =()=>{

   const{posts} = useAppSelector(state=>state.postSlice)

   const dispatch=  useAppDispatch()
    useEffect(() => {
        dispatch(actionsPostsSlice.loadPosts())
    }, []);


    return(
        <div>
            {posts.map((post)=><PostComponent key={post.id} post={post}/>)}
        </div>
    )
}
export default PostsComponents