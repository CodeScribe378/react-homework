import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {actionsPostSlice} from "../../redux/slices/postSlice.ts";
import PostComponent from "../PostComponent/PostComponent.tsx";


const PostsComponent =()=>{

  const {posts} =  useAppSelector(state=>state.postSlice)

    const dispatch =useAppDispatch()
    useEffect(() => {
        dispatch(actionsPostSlice.loadPosts())
    }, []);

    return(
        <div>
            {posts.map((post)=><PostComponent key={post.id} post={post}/>)}
        </div>
    )
}
export default PostsComponent