import {IPost} from "../Models/IPost.ts";

const UrlPosts= import.meta.env.VITE_API_URL + '/posts'

const GetPosts= async():Promise <IPost []>=>{
    return await fetch (UrlPosts)
        .then((value)=>value.json())
}

export{
    GetPosts
}