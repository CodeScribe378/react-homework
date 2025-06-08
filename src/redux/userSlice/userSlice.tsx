import {IUser} from "../../Models/IUser/IUser.ts";
import {createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {usersLoad} from "./usersLoad.tsx";
import {loadUser} from "./userLoad.tsx";

type UserSliceType={
    users: IUser[],
    user: IUser | null,
    message: string | null,
    loadState: boolean
}
const initialState: UserSliceType = {users: [], message: null, user: null, loadState: false}
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action:PayloadAction<boolean>)=>{
            state.loadState = action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(usersLoad.fulfilled, (state, action: PayloadAction<IUser[]>)=>{
                state.users = action.payload
            })
            .addCase(usersLoad.rejected, (state, action)=>{
                state.message = action.payload as string
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>)=>{
                state.user = action.payload
            })
            .addCase(loadUser.rejected, (state, action)=>{
                state.message = action.payload as string
            })
            .addMatcher(isFulfilled(usersLoad, loadUser), (state)=>{
                state.loadState = true
            })



})

export const userSliceActions ={
    ...userSlice.actions, usersLoad, loadUser
}
