import {useEffect, useState} from "react";
import {IPostDJ} from "../../Models/IPostsDJ/IPostDJ.ts";
import {GetPostsDJ} from "../../services/api.service.tsx";
import ComponentPostDJ from "../ComponentPostDJ/ComponentPostDJ.tsx";


const ComponentPostsDJ =()=>{

    const [posts, setPosts] = useState<IPostDJ[]>([])
    useEffect(()=>{

        GetPostsDJ()
            .then((response)=>setPosts(response))
    }, [posts])

    return(
        <div>{posts.map((post)=><ComponentPostDJ key={post.id} post={post}/>)}</div>
    )

}
export default ComponentPostsDJ