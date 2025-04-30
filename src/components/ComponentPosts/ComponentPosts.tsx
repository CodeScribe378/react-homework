import {useEffect, useState} from "react";
import {IPost} from "../../Models/IPost.ts";
import {GetPosts} from "../../services/app.service.ts";
import ComponentPost from "../ComponentPost/ComponentPost.tsx";


const ComponentPosts =()=>{

    const [posts, setPosts] = useState<IPost[]>([])

   useEffect(()=>{
       GetPosts()
           .then((response)=>{
               setPosts(response)
           })
   }, [])

    return (
        <div>
            {posts.map((post)=><ComponentPost key ={post.id} post={post}/>)}
        </div>

    )
}
export default ComponentPosts