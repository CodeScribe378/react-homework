import {createAsyncThunk} from "@reduxjs/toolkit";
import {getPosts} from "../../services/api.service.ts";

export const loadPosts = createAsyncThunk ('postSlice/loadPosts', async (_, thunkAPI)=>{
   try{
       const posts = await getPosts()
       return thunkAPI.fulfillWithValue(posts)
   }catch(e){
       console.log(e)
       return thunkAPI.rejectWithValue('some error')
   }
})