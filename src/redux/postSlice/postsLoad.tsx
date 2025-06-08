import {createAsyncThunk} from "@reduxjs/toolkit";
import {GetPosts} from "../../services/api.service.ts";


export const postsLoad = createAsyncThunk('posts/postsLoad', async(_, thunkAPI)=>{

    try{
        const posts = await GetPosts()
        return thunkAPI.fulfillWithValue(posts)
    }catch(e){
        console.log(e)
        return thunkAPI.rejectWithValue('error')
    }
})