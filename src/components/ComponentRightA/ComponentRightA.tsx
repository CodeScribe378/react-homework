import {useContext} from "react";
import {MyPropContext} from "../../context/context.tsx";



const ComponentRightA =()=>{

    const{changeColor}  = useContext(MyPropContext)

    const handler =()=>{
        changeColor('green')
    }
    return(
        <div>
            <button onClick={handler}>put on me </button>

        </div>
    )
}
export default ComponentRightA