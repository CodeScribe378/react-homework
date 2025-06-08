import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {userSliceActions} from "../../redux/userSlice/userSlice.tsx";
import UserComponent from "../UserComponent/UserComponent.tsx";

const UsersComponent =()=>{

    const {users, message} =useAppSelector(store =>store.userSlice)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userSliceActions.usersLoad())
    }, []);

    return(
        <div>
            {message && <div>'this is error'</div>}
            {users.map((user)=><UserComponent key={user.id} user={user}/>)}
        </div>
    )
}
export default UsersComponent