
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import { useEffect} from "react";
import {userSliceActions} from "../../redux/userSlice/userSlice.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useParams} from "react-router-dom";
import SingleUserComponent from "../SingleUserComponent/SingleUserComponent.tsx";


export const SingleUsersComponent = ()=>{

    const {id} = useParams()

    const dispatch = useAppDispatch()
    const {user, message} = useAppSelector (state=>state.userSlice)

    useEffect(() => {

        if(id){
            dispatch(userSliceActions.loadUser(id))
        }
    }, [id]);
    return(
        <div>
            {user && <SingleUserComponent key={user.id} user={user}/>}
            {message && <div>{message}</div>}
        </div>


    )
}
