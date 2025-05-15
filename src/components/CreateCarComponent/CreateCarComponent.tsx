import {useForm} from "react-hook-form";
import {IModelsCars} from "../../Models/ModelsCars/ModelsCars.ts";

import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator.ts";
import {CreateCar} from "../../service/service.api.tsx";



const CreateCarComponent =()=>{

  const {handleSubmit,register, formState:{errors, isValid} } = useForm<IModelsCars>({
      mode: 'all', resolver: joiResolver(carValidator)
  })

    const handle =(dataCar: IModelsCars)=>{
    CreateCar(dataCar)
    }



    return(
        <form onSubmit={handleSubmit(handle)}>
            <div>
            <input type='text' {...register('brand')}/>
                <div>{errors.brand?.message}</div>
            </div>

            <div>
                <input type='text' {...register('price')}/>
                <div>{errors.price?.message}</div>
            </div>

            <div>
                <input type='text' {...register('year')}/>
                <div>{errors.year?.message}</div>
            </div>
            <button disabled={!isValid}>send</button>
        </form>
    )
}
export default CreateCarComponent