import {commentSlice} from "./commentSlice.ts";
import {loadComments} from "./loadComments.ts";



export const actionsCommentSlice ={
    ...commentSlice.actions, loadComments
}