import {useEffect, useState} from "react";
import {IPosts} from "../../Models/IPosts/IPosts.ts";
import {GetPostsJS} from "../../services/api.service.tsx";
import ComponentPostJS from "../ComponentPostJs/ComponentPostJS.tsx";

const ComponentPosts =()=>{

    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(()=>{
        GetPostsJS()
            .then((response)=>setPosts(response))
    }, [posts])


    return(
        <div>
            {posts.map((post)=><ComponentPostJS key= {post.id} post={post}/>)}
        </div>
    )

}
export default ComponentPosts