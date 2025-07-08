import {IUser} from "../../Models/IUsers/IUsers.ts";
import {FC} from "react";
import './user.css'
type UserType ={
    user: IUser
}


const UserComponent: FC<UserType> =({user})=>{
    return(
        <div className={'block'}>
            <p>{user.name} - {user.username}</p>
            <p>{user.phone}</p>
        </div>
    )
}
export default UserComponent