import {useEffect, useState} from "react";
import {GetGeneralFunction} from "../../services/general.api.services.ts";
import {IPosts} from "../../Models/ModelPosts/IPosts.ts";
import {IModelBase} from "../../Models/ModelsBase/IModelBase.ts";
import ComponentPost from "../ComponentPost/ComponentPost.tsx";

const ComponentPosts =()=>{

    const [posts, setPosts] = useState<IPosts[]>([])

 useEffect(()=>{

     GetGeneralFunction<{posts: IPosts[]} & IModelBase> ('/posts')
         .then((response)=>setPosts(response.posts))

 }, [posts])
    return(
        <div>
            {posts.map((post)=>(<ComponentPost key={post.id} post={post}/>))}
        </div>
    )


}
export default ComponentPosts