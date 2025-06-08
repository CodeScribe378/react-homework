
import {configureStore} from "@reduxjs/toolkit";
import {postSlice} from "../postSlice/postSlice.ts";
import {commentSlice} from "../commentSlice/commentSlice.ts";
export const store = configureStore({
    reducer:{
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer
    }
})