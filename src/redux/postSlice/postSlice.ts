
import { createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {IPosts} from "../../IModels/IPosts/IPosts.ts";
import {loadPosts} from "./loadPosts.ts";


type PostSliceType={
    posts: IPosts[]
}

const initialState: PostSliceType = {posts:[]}


export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPosts[]>)=>{
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state, action)=>{
                console.log(state)
                console.log(action)

            })
})