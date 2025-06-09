import {IUser} from "../../Models/IUsers/IUsers.ts";
import {FC} from "react";

type UserType ={
    user: IUser
}




const UserComponent: FC<UserType> =({user})=>{
    return(
        <div>
            <p>{user.name} - {user.username}</p>
            <p>{user.phone}</p>
        </div>
    )
}
export default UserComponent