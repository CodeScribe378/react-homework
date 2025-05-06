import {IUser} from "../models/IUsers/IUsers.ts";
import {ITotalUsers} from "../models/ITotalUsers/ITotalUsers.ts";
import {ICarts} from "../models/ICarts/ICarts.ts";
import {ITotalCarts} from "../models/ITotalCarts/ITotalCarts.tsx";

const baseUrl = import.meta.env.VITE_API_URL



    const GetAllUsers = async():Promise <IUser[]>=> {
        const response: ITotalUsers = await fetch(baseUrl + '/users')
            .then((value) => value.json())
        return response.users
    }

    const GetCartsById = async(id: number):Promise <ICarts[]> => {
        const response: ITotalCarts = await fetch(baseUrl + '/carts/user/' + id)
            .then((value) => value.json())
        return response.carts
    }
    export{
    GetCartsById,
        GetAllUsers
    }





