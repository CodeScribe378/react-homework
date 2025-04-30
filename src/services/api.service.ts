import {IComment} from "../models/IComment.ts";
const UrlComments = import.meta.env.VITE_API_URL + '/comments'


const GetComments=async(): Promise<IComment[]>=>{
   return await fetch (UrlComments)
        .then((value)=>value.json())
}

export{
    GetComments
}