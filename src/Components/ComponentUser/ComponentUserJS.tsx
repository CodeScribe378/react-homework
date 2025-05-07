import {IUserJS} from "../../Models/IUsersJs/IUsersJs.ts";
import {FC} from "react";
import './ComponentUser.css'

type TypeUserJs = {
    user: IUserJS
}

const ComponentUserJS: FC<TypeUserJs> =({user})=>{

    return (
        <div> <h3>USER: {user.name} - {user.username} </h3>
            <p>contact: email: {user.email} - phone:{user.phone} - website: {user.website}</p>
            <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p>Company: {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>

        </div>
    )
}
export default ComponentUserJS

