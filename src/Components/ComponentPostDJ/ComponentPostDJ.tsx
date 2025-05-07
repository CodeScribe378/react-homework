import {IPostDJ} from "../../Models/IPostsDJ/IPostDJ.ts";
import {FC} from "react";
import './ComponentPostDJ.css'
import ComponentTags from "../ComponentTags/ComponentTags.tsx";



type TypePostDJ = {
    post: IPostDJ
}

const ComponentPostDJ: FC<TypePostDJ> = ({post})=>{

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {post.tags.map((tag, index)=> <ComponentTags key={index} tag={tag}/>)}
            <p>likes:{post.reactions.likes} & dislikes: {post.reactions.dislikes}</p>
            <p>{post.views}</p>
            <p>{post.userId}</p>
        </div>
    )
}
export default ComponentPostDJ

