import {FC, useEffect, useState} from "react";
import {ICarts} from "../../models/ICarts/ICarts.ts";
import {GetCartsById} from "../../service/api.service.tsx";
import CartComponent from "../CartComponent/CartComponent.tsx";

type CartsComponents= {
    id: string
}

const CartsComponents:FC<CartsComponents>=({id})=>{
    const [carts, setCarts] = useState<ICarts[]>([])
    useEffect(()=>{
        if(id){

           GetCartsById(+id)
                .then((response)=>setCarts(response))

        }

    }, [id])


    return(
        <div>
        {carts.map((cart:ICarts)=><CartComponent key={cart.id} cart={cart}/>)}
    </div>
    )
}

export default CartsComponents