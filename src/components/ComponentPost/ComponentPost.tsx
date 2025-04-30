import {FC} from "react";
import {IPost} from "../../models/IPost/IPost.ts";
import ComponentTags from "../ComponentTags/ComponentTags.tsx";
import './ComponentPost.css'
type MyTypePost = {
    value: IPost
}
const ComponentPost: FC<MyTypePost> = ({value})=>{
    return(
        <div>
            {<div>
                {value.title}
                {value.body}
                <ul>{value.tags.map((item, index, )=><ComponentTags key={index} item={item}/>)}</ul>
                <p>reactions: likes: {value.reactions.likes}, dislikes: {value.reactions.dislikes}</p>
                <p>views:  {value.views}</p>
                <p>userId: {value.userId}</p>
            </div>}

        </div>
    )
}
export default ComponentPost