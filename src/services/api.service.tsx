import {IUser} from "../models/IUser/IUser.ts";
import {IResponse} from "../models/IResponse/IResponse/IResponse.ts";


const BaseUrl = import.meta.env.VITE_API_URL

export const GetUsers = async(page: string): Promise<IUser[]>=>{

    const limit = 30
    const skip = limit * (+page) - limit

    const response: IResponse = await fetch (BaseUrl + '/users' + '/?skip=' + skip)
        .then((value)=>value.json())
    return response.users
}
