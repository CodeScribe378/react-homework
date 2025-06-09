import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {actionsUserSlice} from "../../redux/slices/userSlice.ts";
import UserComponent from "../UserComponent/UserComponent.tsx";


const UsersComponents =()=>{

  const {users} =  useAppSelector (state=>state.userSlice)
  const dispatch=   useAppDispatch()

    useEffect(() => {
        dispatch(actionsUserSlice.loadUsers())
    }, []);

    return(
      <div>
          {users.map((user)=><UserComponent key={user.id} user={user}/>)}
      </div>
    )
}
export default UsersComponents