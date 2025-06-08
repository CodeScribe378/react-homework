import {postSlice} from "./postSlice.tsx";
import {postsLoad} from "./postsLoad.tsx";


export const postsSliceActions = {
    ...postSlice.actions, postsLoad
}