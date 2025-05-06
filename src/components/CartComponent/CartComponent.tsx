import {ICarts} from "../../models/ICarts/ICarts.ts";
import {FC} from "react";

type CartComponentType={
    cart: ICarts
}


const CartComponent:FC<CartComponentType> =({cart})=>{

    return (
        <div>{cart.totalProducts}-{cart.totalQuantity}</div>
    )
}
export default CartComponent