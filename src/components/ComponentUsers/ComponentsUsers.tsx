import {useEffect, useState} from "react";
import {GetGeneralFunction} from "../../services/general.api.services.ts";
import {IUser} from "../../Models/ModelsUsers/IUser.ts";
import {IModelBase} from "../../Models/ModelsBase/IModelBase.ts";
import ComponentUser from "../ComponentUser/ComponentUser.tsx";

const ComponentsUsers =()=>{
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(()=>{
        GetGeneralFunction<{users: IUser[]} & IModelBase>('/users')
            .then((response)=>setUsers(response.users))
    }, [users])

return(
    <div>
        {users.map((value)=><ComponentUser key={value.id} value={value}/>)}
    </div>
)


}
export default ComponentsUsers