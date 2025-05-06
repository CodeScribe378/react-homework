import {FC} from "react";
import {IUser} from "../../Models/ModelsUsers/IUser.ts";

type UserType={
    value: IUser
}

const ComponentUser: FC<UserType> =({value})=>{
    return(
        <div>
            {value.firstName} - {value.lastName}
        </div>
    )

}
export default ComponentUser