import {useEffect, useState} from "react";
import {IModelsCars} from "../../Models/ModelsCars/ModelsCars.ts";
import {GetCars} from "../../service/service.api.tsx";
import CarComponent from "../CarComponent/CarComponent.tsx";


const CarsComponent =()=>{

   const [cars, setCars] = useState<IModelsCars[]>([])

    useEffect(() => {
        GetCars()
            .then((value)=>{
                setCars(value)
            })

    }, []);

    return(
        <div>
            {cars.map((car)=><CarComponent key={car.id} car={car}/>)}
        </div>
    )
}
export default CarsComponent