import {IUser} from "../../models/IUser/IUser.ts";
import {FC} from "react";


type UsersType ={
    user: IUser
}

const UserComponent: FC<UsersType> =({user})=>{

    return (
        <div>{user.firstName} - {user.lastName}</div>
    )
}
export default UserComponent