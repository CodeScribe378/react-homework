import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../Models/IPosts/IPost.ts";
import {GetAll} from "../../services/api.service.ts";


type PostSliceType={
    posts: IPost[]
}


export const loadPosts = createAsyncThunk('postSlice/loadPosts', async (_, thunkAPI)=>{
   try{
       const posts = await GetAll<IPost[]>('/posts')
       return thunkAPI.fulfillWithValue(posts)
   }catch(e){
       console.log(e)
       return thunkAPI.rejectWithValue('this is error')
   }
})

const initialState: PostSliceType = {posts:[]}

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>)=>{
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state, action)=>{
                console.log(state)
                console.log(action)
            })

})

export const actionsPostSlice={
    ...postSlice.actions, loadPosts
}

