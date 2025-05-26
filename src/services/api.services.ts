import axios from "axios";
import {IUserWithToken} from "../models/IUserWithToken/IUserWithToken.ts";


export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

type DataLogin = {
    username: string,
    password: string,
    expiresInMins: number
}


export const loginUser= async ({username, password, expiresInMins}:DataLogin):Promise <IUserWithToken>=>{

    const {data: UserWithToken} = await axiosInstance.post<IUserWithToken>('/login', {username, password, expiresInMins})
    localStorage.setItem('user', JSON.stringify(UserWithToken))
    return UserWithToken

}



