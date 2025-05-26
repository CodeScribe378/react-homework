import {IProducts} from "../IProducts/IProducts.ts";

export interface IBaseProducts{
    products: IProducts[]
    total: number,
    skip: number,
    limit: number
}