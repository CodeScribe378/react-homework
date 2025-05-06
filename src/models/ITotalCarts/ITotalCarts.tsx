import {ICarts} from "../ICarts/ICarts.ts";

export interface ITotalCarts{
    carts: ICarts[]
    total: number
    skip: number
    limit: number
}