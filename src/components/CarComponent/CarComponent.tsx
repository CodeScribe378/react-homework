import {IModelsCars} from "../../Models/ModelsCars/ModelsCars.ts";
import {FC} from "react";

import './CarComponent.css'
type CarType ={
    car: IModelsCars
}


const CarComponent: FC<CarType> =({car})=>{

    return (
        <div>
            <p>{car.id}-{car.brand} - year: {car.year} - price: {car.price} </p>
        </div>
    )
}
export default CarComponent