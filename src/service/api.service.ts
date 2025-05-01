import {IProduct} from "../models/ModelsProduct/ModelsProduct.ts";
import {IResponse} from "../models/ModelsResponse/ModelsResponse.ts";

const UrlProducts= import.meta.env.VITE_API_URL  + '/products'

const GetProducts=async():Promise<IProduct[]>=>{
    const response:IResponse = await fetch (UrlProducts)
        .then((value)=>value.json())
     return response.products
}
export{
    GetProducts
}