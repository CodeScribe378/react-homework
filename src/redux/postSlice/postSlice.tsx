import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../Models/IPost/IPost.ts";
import {postsLoad} from "./postsLoad.tsx";


type PostSliceType={
    posts: IPost[]
    message: string | null
}


const initialState: PostSliceType = {posts: [], message: null}

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(postsLoad.fulfilled,(state, action:PayloadAction<IPost[]>)=>{
                state.posts = action.payload
            })
            .addCase(postsLoad.rejected, (state, action)=>{
                state.message = action.payload as string
            })
})