import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComments} from "../../Models/IComments/IComments.ts";
import {GetAll} from "../../services/api.service.ts";


type CommentSliceType={
    comments: IComments[]
}

export const loadComments = createAsyncThunk ('commentSlice/loadComments', async(_, thunkAPI)=>{
    try{
        const comments = await GetAll<IComments[]>('/comments')
        return thunkAPI.fulfillWithValue(comments)
    }catch(e){
        console.log(e)
        return thunkAPI.rejectWithValue('error')
    }
})


const initialState: CommentSliceType = {comments: []}

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComments[]>)=>{
                state.comments = action.payload
            })
            .addCase(loadComments.rejected, (state, action)=>{
                console.log(state)
                console.log(action)
            })

})

export const actionsCommentSlice={
    ...commentSlice.actions, loadComments
}