import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import{IUser} from "../../Models/IUsers/IUsers.ts";
import {GetAll} from "../../services/api.service.ts";

type UserSliceType ={
    users: IUser[]
}

const loadUsers = createAsyncThunk('userSlice/loadUsers', async(_, thunkAPI)=> {
    try {
        const users = await GetAll<IUser[]>('/users')
        return thunkAPI.fulfillWithValue(users)
    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue('this is error')
    }


})

const initialState: UserSliceType= {users: []}
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction <IUser[]>)=>{
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action)=>{
                console.log(state)
                console.log(action)
            })
})

export const actionsUserSlice ={
    ...userSlice.actions, loadUsers
}