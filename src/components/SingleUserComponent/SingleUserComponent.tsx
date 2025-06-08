import {IUser} from "../../Models/IUser/IUser.ts";
import {FC} from "react";

type UserType ={
    user: IUser
}


const SingleUserComponent: FC<UserType> =({user})=>{
    return(
        <div>
            <div>phone: {user.phone}</div>
        </div>
    )
}
export default SingleUserComponent