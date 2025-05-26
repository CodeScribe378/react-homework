import {useEffect, useState} from "react";

import {IProducts} from "../../models/IProducts/IProducts.ts";
import AuthResourcesComponent from "../AuthResourcesComponent/AuthResourcesComponent.tsx";
import {loadAuthProducts} from "../../services/api.service.load.products.ts";
import {refresh} from "../../services/api.service.refresh.ts";



const AuthResourcesComponents =()=>{

const [products, setProducts] = useState<IProducts[]>([])
    useEffect(() => {
       loadAuthProducts()
            .then((products)=>{
                setProducts(products)
            }).catch(reason => {
                console.log(reason)
             refresh()
                 .then(()=>loadAuthProducts())
                 .then((value)=>setProducts(value))
        })
    }, []);


    return(
        <>
            {products.map((product)=><AuthResourcesComponent key={product.id} product={product}/>)}
        </>
    )

}
export default AuthResourcesComponents