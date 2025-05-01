
import {IReviews} from "../../models/ModelsReview/ModelsReview.ts";
import {FC} from "react";


type ReviewType={
    review: IReviews
}

const ComponentReviews:FC<ReviewType> =({review})=>{

    return(
        <ul>
        <li>rating: {review.rating}</li>
            <li>comment: {review.comment}</li>
            <li>date: {review.date}</li>
            <li>reviewerName: {review.reviewerName}</li>
            <li>reviewerEmail: {review.reviewerEmail}</li>
        </ul>
    )
}
export default ComponentReviews