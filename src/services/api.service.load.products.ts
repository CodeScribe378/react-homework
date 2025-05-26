import {IProducts} from "../models/IProducts/IProducts.ts";
import {IBaseProducts} from "../models/IBaseProducts/IBaseProducts.ts";

import axios from "axios";
import {retrieveLocalStorage} from "./helpers.ts";
import {IUserWithToken} from "../models/IUserWithToken/IUserWithToken.ts";

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

axiosInstance.interceptors.request.use((requestObject)=>{
    if(requestObject.method?.toUpperCase() === 'GET'){
        requestObject.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithToken>('user').accessToken
    }
    return requestObject

})

export const loadAuthProducts = async (): Promise <IProducts[]>=>{
    const {data: {products}} = await axiosInstance.get<IBaseProducts>('/products')
    return products
}

