import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost/IPost.ts";


import {GetPosts} from "../../service/api.service.ts";
import ComponentPost from "../ComponentPost/ComponentPost.tsx";


const ComponentPosts= ()=>{

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(()=>{

        GetPosts()
            .then((response)=>{
                setPosts(response)
            })

    },[])
return(
    <div>
        {posts.map((post)=><ComponentPost key={post.id} value={post}/>
           )}
    </div>
)
}
export default ComponentPosts