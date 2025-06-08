
import { createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {IComment} from "../../IModels/IComments/IComment.ts";
import {loadComments} from "./loadComments.ts";



type initialStateType={
    comments: IComment[]
}


const initialState: initialStateType = {comments:[]}


export const commentSlice = createSlice ({
    name: 'commentSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: builder=>
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>)=>{
      state.comments= action.payload
        })
            .addCase(loadComments.rejected, (state, action)=>{
                console.log(state)
                console.log(action)
            })
})