import  axios from "axios";
import {IUser} from "../Models/IUser/IUser.ts";
import {IPost} from "../Models/IPost/IPost.ts";


export const axiosInstant = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export const GetUsers = async(): Promise<IUser[]>=>{
    const {data} =  await axiosInstant.get<IUser[]>('/users')
    return data
}

export const GetUser = async (id: string)=>{
    const {data: user } = await axiosInstant.get<IUser>('/users/' +id)
    return user
}

export const GetPosts = async (): Promise <IPost[]>=>{
   const {data: posts} = await axiosInstant.get<IPost[]>('/posts')
    return posts
}