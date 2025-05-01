import {IReviews} from "../ModelsReview/ModelsReview.ts";
import {IDimensions} from "../ModelsDimensions/ModelsDimension.ts";
import {IMeta} from "../ModelsMeta/ModelsMeta.ts";

export interface  IProduct{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    thumbnail: string;
    images: string[];
}

// interface Dimensions {
//   width: number;
//   height: number;
//   depth: number;
// }

// export interface Reviews {
//   rating: number;
//   comment: string;
//   date: string;
//   reviewerName: string;
//   reviewerEmail: string;
// }
//  interface Meta {
//   createdAt: string;
//   updatedAt: string;
//   barcode: string;
//   qrCode: string;
// }

