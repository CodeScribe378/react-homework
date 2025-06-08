import  axios from "axios";
import {IPosts} from "../IModels/IPosts/IPosts.ts";
import {IComment} from "../IModels/IComments/IComment.ts";

 const axiosInstant = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async(): Promise<IPosts[]>=>{
     const {data: posts}= await axiosInstant.get<IPosts[]>('/posts')
    return posts
}

export const getComments = async(): Promise<IComment[]>=>{
    const {data: comments} = await axiosInstant.get<IComment[]>('/comments')
    return comments
}