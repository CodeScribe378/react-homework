import {IProduct} from "../ModelsProduct/ModelsProduct.ts";

export interface IResponse{
   products: IProduct[],
    total: number,
    skip: number,
    limit: number
}