import axios from "axios";
import {retrieveLocalStorage} from "./helpers.ts";
import {IUserWithToken} from "../models/IUserWithToken/IUserWithToken.ts";
import {IPairToken} from "../models/IPairToken/IPairToken.ts";

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

export const refresh = async ()=>{

    const userWithToken= retrieveLocalStorage<IUserWithToken>('user')
    const{data: {accessToken, refreshToken}} = await axiosInstance.post<IPairToken> ('/refresh', {refreshToken: userWithToken.refreshToken, expiresInMins:1})
    userWithToken.accessToken= accessToken
    userWithToken.refreshToken = refreshToken
    localStorage.setItem('user', JSON.stringify(userWithToken))
}

