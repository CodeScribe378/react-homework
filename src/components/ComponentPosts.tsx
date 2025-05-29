import {useFetch} from "../hook/useFetch.tsx";
import {IPosts} from "../IModels/IPosts.ts";
import ComponentPost from "./ComponentPost.tsx";


const ComponentPosts =()=>{

    const posts = useFetch <IPosts[]>('https://jsonplaceholder.typicode.com/posts', [])

    return(
        <div>
            {posts.map((post)=>(<ComponentPost key={post.id} post={post}/>))}
        </div>
    )
}
export default ComponentPosts