import {createAsyncThunk} from "@reduxjs/toolkit";
import {userSliceActions} from "./userSlice.tsx";
import {GetUsers} from "../../services/api.service.ts";


export const usersLoad = createAsyncThunk('userSlice/userLoad', async(_, thunkAPI)=>{
    try{
        const users= await GetUsers()
        thunkAPI.dispatch(userSliceActions.changeLoadState(true))
        return thunkAPI.fulfillWithValue(users)
    }catch (e){
        console.log(e)
        return thunkAPI.rejectWithValue('error')
    }
})

