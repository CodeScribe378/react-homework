import {useParams} from "react-router-dom";
import CartsComponents from "../../components/CartsComponents/CartsComponents.tsx";


const CartsPage =()=>{

    const {id} =useParams()

console.log(id)

    return(
        <div>{id && < CartsComponents id={id}/>}
        </div>
    )
}
export default CartsPage