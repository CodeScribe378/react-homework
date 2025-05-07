import {useEffect, useState} from "react";
import {IUserJS} from "../../Models/IUsersJs/IUsersJs.ts";
import {GetUsersJson} from "../../services/api.service.tsx";
import ComponentUserJS from "../ComponentUser/ComponentUserJS.tsx";


const UsersComponentsJS =()=>{

    const [users, setUsers] = useState<IUserJS[]>([])

    useEffect(()=>{
       GetUsersJson()
            .then((response)=>setUsers(response))
    }, [])


    return(
        <div>
            {users.map((user)=><ComponentUserJS key={user.id} user={user}/>)}
        </div>
    )
}
export default UsersComponentsJS