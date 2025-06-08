import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {postsSliceActions} from "../../redux/postSlice/postsSliceActions.ts";
import ComponentPost from "../ComponentPost/ComponentPost.tsx";

const ComponentPosts =()=>{

    const{posts, message} =useAppSelector(state => state.postSlice)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(postsSliceActions.postsLoad())
    }, []);

    return(
        <div>
            {message && <div>{message}</div>}
            {posts.map((post)=><ComponentPost key={post.id} post={post}/>)}
        </div>
    )
}
export default ComponentPosts