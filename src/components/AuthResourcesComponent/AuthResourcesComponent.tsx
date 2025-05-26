import {IProducts} from "../../models/IProducts/IProducts.ts";
import {FC} from "react";


type TypeProducts ={
    product: IProducts
}
 const AuthResourcesComponent: FC<TypeProducts> =({product})=>{
    return(
        <>
            <div> <p>{product.title} Description:{product.description}</p>
                <p>Category:{product.category} - Price:{product.price}</p>
                </div>
        </>
    )
}
export default AuthResourcesComponent

