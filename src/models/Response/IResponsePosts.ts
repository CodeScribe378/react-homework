import {IPost} from "../IPost/IPost.ts";

export interface IResponsePosts{
posts: IPost[],
    total: number,
    skip: number,
    limit: number
}
