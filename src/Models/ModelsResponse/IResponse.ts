import {IComment} from "../ModelComment/IComment.ts";

export interface IResponse{
comments:IComment[],
    total: number,
    skip: number,
    limit: number
}