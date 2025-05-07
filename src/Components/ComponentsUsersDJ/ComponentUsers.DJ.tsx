import {useEffect, useState} from "react";
import {IUserDJ} from "../../Models/IUsersDJ/IUserDJ.ts";
import {GetUsersDJ} from "../../services/api.service.tsx";
import ComponentUserDJ from "../ComponentUserDJ/ComponentUserDJ.tsx";

const ComponentUsersDJ =()=>{

    const [users, setUsers]=useState<IUserDJ[]>([])

    useEffect(() => {
        GetUsersDJ()
            .then((response)=>setUsers(response))
    }, [users]);


    return (
        <div>
            {users.map((value) => <ComponentUserDJ key={value.id} value={value}/>)}
        </div>

    )
}
export default ComponentUsersDJ