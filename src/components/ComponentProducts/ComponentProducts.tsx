import {useEffect, useState} from "react";
import {IProduct} from "../../models/ModelsProduct/ModelsProduct.ts";
import {GetProducts} from "../../service/api.service.ts";
import ComponentProduct from "../ComponentProduct/ComponentProduct.tsx";

const ComponentProducts =()=>{

    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(()=>{

        // GetProducts()
        //     .then((response)=>{
        //         setProducts(response)
        //     })

        const fetchProducts= async()=>{
            const products = await GetProducts()
            setProducts(products)
        }
        fetchProducts()

    }, [])

    return(
        <div>
            {products.map((product)=><ComponentProduct key={product.id} value={product}/>)}
        </div>
    )

}
export default ComponentProducts