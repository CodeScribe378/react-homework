import {createAsyncThunk} from "@reduxjs/toolkit";
import {GetUser} from "../../services/api.service.ts";


export const loadUser = createAsyncThunk ('userSlice/loadUser', async(id: string,thunkAPI)=>{
 try{
     const user = await GetUser(id)

   return  thunkAPI.fulfillWithValue(user)
 }catch(e){
     console.log(e)
     return thunkAPI.rejectWithValue('some error happened')
 }
})