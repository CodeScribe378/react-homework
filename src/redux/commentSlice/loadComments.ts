import {createAsyncThunk} from "@reduxjs/toolkit";
import {getComments} from "../../services/api.service.ts";


export const loadComments = createAsyncThunk ('commentSlice/loadComments', async(_, thunkAPI)=>{
   try{
       const comments = await getComments()
       return thunkAPI.fulfillWithValue(comments)
   }catch(e){
       console.log(e)
       return thunkAPI.rejectWithValue('some error happened')
   }
})