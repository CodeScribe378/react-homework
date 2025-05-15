import axios from "axios";
import {IModelsCars} from "../Models/ModelsCars/ModelsCars.ts";


export const AxiosInstant = axios.create(
    {
        baseURL: 'http://185.69.152.209/carsAPI/v1',
        headers: {'Content-type': 'application/json'}
    }
)

export const GetCars= async(): Promise<IModelsCars[]>=>{
    const {data} = await AxiosInstant.get<IModelsCars[]>('/cars')
    return data
}

export const CreateCar = async(car: IModelsCars)=>{
   await AxiosInstant.post<IModelsCars>('/cars', car)
}