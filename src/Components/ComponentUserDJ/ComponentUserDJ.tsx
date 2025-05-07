
import {FC} from "react";
import {IUserDJ} from "../../Models/IUsersDJ/IUserDJ.ts";

import './ComponentUserDJ.css'

type TypeUserDJ={
    value: IUserDJ
}


const ComponentUserDJ: FC<TypeUserDJ>=({value})=>{

    return (
        <div>
            <h3>USER: {value.userAgent} - {value.lastName} - {value.maidenName}</h3>
            <p>age: {value.age}</p>
            <p>email: {value.email}</p>
            <p>phone: {value.phone}</p>
            <p>username: {value.username}</p>
            <p>password: {value.password}</p>
            <p>birthDate: {value.birthDate}</p>
            <p>{value.image}</p>
            <p>{value.ip}</p>
            <p>address: {value.address.city} </p>
            <p>city: {value.address.state}</p>
            <p>postal Code: {value.address.postalCode}</p>
            <p>macAddress: {value.macAddress}</p>
            <p>Company:</p>
            <p>department: {value.company.department}</p>
            <p>name: {value.company.name}</p>
            <p>Crypto:</p>
            <p>coin: {value.crypto.coin}</p>
            <p>wallet: {value.crypto.wallet}</p>


        </div>
    )
}
export default ComponentUserDJ

