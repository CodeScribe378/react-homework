import {IUser} from "../models/IUsers/IUsers.ts";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

type UserComponent={
    user: IUser
}



const UserComponent:FC<UserComponent> =({user})=> {

    const navigate = useNavigate()

    const handle=()=>{
         navigate(user.id +'/carts', {state:user})
    }

    return(
            <div>{user.firstName} - {user.lastName}
        <button onClick={handle}>Look Carts</button>
            </div>
    )
}
export default UserComponent