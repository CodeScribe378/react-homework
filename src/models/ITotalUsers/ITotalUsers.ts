import {IUser} from "../IUsers/IUsers.ts";

export interface ITotalUsers{
    users: IUser[]
    total: number
    skip: number
    limit: number
}