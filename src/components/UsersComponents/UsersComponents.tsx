import {useEffect, useState} from "react";
import {IUser} from "../../models/IUsers/IUsers.ts";


import UserComponent from "../../UserComponent/UserComponent.tsx";
import {GetAllUsers} from "../../service/api.service.tsx";



const UsersComponents =()=>{

const  [users, setUsers] = useState<IUser[]>([])
    useEffect(()=>{
        GetAllUsers()
            .then((response )=>setUsers(response))
    }, [users])

    return(
        <div>
            {users.map((user)=><UserComponent key={user.id} user={user}/>)}
        </div>
    )


}
export default UsersComponents