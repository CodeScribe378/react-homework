import {IUser} from "../../Models/IUser/IUser.ts";
import {FC} from "react";
import {Link} from "react-router-dom";


type TypeUser ={
    user: IUser
}

const UserComponent: FC<TypeUser> =({user})=>{


    return(
        <div>
            <Link to={'/users/' + user.id}> {user.name} - {user.username}</Link>
        </div>
    )
}
export default UserComponent