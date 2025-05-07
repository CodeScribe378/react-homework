 import {IUserJS} from "../Models/IUsersJs/IUsersJs.ts";
 import {IUserDJ} from "../Models/IUsersDJ/IUserDJ.ts";
 import {urlsDJ} from "../constants/url.dj.tsx";
 import {IBaseRep} from "../Models/BaseRep/IBaseRep.ts";
 import {IPosts} from "../Models/IPosts/IPosts.ts";
 import {IPostDJ} from "../Models/IPostsDJ/IPostDJ.ts";
 import {ICommentDJ} from "../Models/ICommentDJ/ICommentDJ.ts";


const baseURLJS= import.meta.env.VITE_API_URL


 export const GetUsersJson = async ():Promise <IUserJS[]> =>{

     return await fetch (baseURLJS + '/users')
        .then ((value)=>value.json())
}

export const GetUsersDJ = async(): Promise <IUserDJ[]>=>{
    const response: {users: IUserDJ[]} & IBaseRep= await fetch (urlsDJ.AllUsers)
        .then((value)=>value.json())
    return response.users
}

export const GetPostsJS = async(): Promise <IPosts[]>=>{
    return await fetch (baseURLJS + '/posts')
        .then((value)=> value.json())
}

export const GetPostsDJ = async (): Promise <IPostDJ[]>=>{
    const response: {posts: IPostDJ[]} & IBaseRep = await fetch (urlsDJ.AllPosts)
        .then((value)=>value.json())
    return response.posts
}

export const GetCommentsJS = async()=>{
    return await fetch(baseURLJS + '/comments')
        .then((value)=>value.json())
}

export const GetCommentsDJ = async (): Promise <ICommentDJ[]>=>{
    const response: {comments: ICommentDJ[]} & IBaseRep = await fetch (urlsDJ.AllComments)
        .then((value)=>value.json())
    return response.comments
}