import {IProduct} from "../../models/ModelsProduct/ModelsProduct.ts";
import {FC} from "react";
import ComponentReviews from "../ComponentReview/ComponentReview.tsx";
import ComponentTags from "../ComponentTag/ComponentTag.tsx";
import ComponentImage from "../ComponentImage/ComponentImage.tsx";

import './ComponentProduct.css'

type ProductType={
    value: IProduct
}

const ComponentProduct: FC<ProductType> =({value})=>{
    return (
        <div>
            <h3> {value.title}</h3>
            <p>description: {value.description}</p>
            <p>category: {value.category}</p>
            <p>price: {value.price}</p>
            <p>discount: {value.discountPercentage}</p>
            <p>rating: {value.rating}</p>
            <p> stock: {value.stock}</p>
            <p>tags:</p>

            <ul>
                {value.tags.map((item, index)=><ComponentTags key={index} item={item}/>)}
            </ul>
            <p>brand: {value.brand}</p>
            <p>sku: {value.sku}</p>
            <p>weight: {value.weight}</p>
            <p>dimensions: width: {value.dimensions.width} - height: {value.dimensions.height} - depth: {value.dimensions.depth}</p>
            <p>{value.warrantyInformation}</p>
            <p>{value.shippingInformation}</p>
            <p>availability: {value.availabilityStatus}</p>
            <p>reviews:</p>
            <ul>
                {value.reviews.map((review, index)=> <ComponentReviews key={index} review={review}/>)}
            </ul>
            <p>return Policy: {value.returnPolicy}</p>
            <p>minimum order quantity: {value.minimumOrderQuantity}</p>
            <p>meta:{value.meta.createdAt} - {value.meta.updatedAt} - {value.meta.barcode} - {value.meta.qrCode}</p>
            <img src={value.thumbnail} alt=''/>
            <p>image: {value.title}</p>
            <ul>
                {value.images.map((image, index)=><ComponentImage key={index} image={image}/>)}
            </ul>

        </div>
    )
}
export default ComponentProduct

