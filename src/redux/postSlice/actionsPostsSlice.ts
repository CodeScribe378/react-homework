import {postSlice} from "./postSlice.ts";
import {loadPosts} from "./loadPosts.ts";


export const actionsPostsSlice ={
    ...postSlice.actions, loadPosts
}