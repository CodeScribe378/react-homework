import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {IUser} from "../../models/IUser/IUser.ts";
import {GetUsers} from "../../services/api.service.tsx";
import UserComponent from "../UserComponent/UserComponent.tsx";


const UsersComponents =()=>{

    const [users, setUsers] = useState<IUser[]>([])
    const [searchParams]= useSearchParams()

    useEffect(() => {

        const page = searchParams.get('page') || '1'

           GetUsers(page)
            .then((response)=>setUsers(response))


    }, [searchParams]);

    return(
        <div>

            {users.map((user)=>(<UserComponent key={user.id} user={user}/>))}

        </div>
    )
}
export default UsersComponents