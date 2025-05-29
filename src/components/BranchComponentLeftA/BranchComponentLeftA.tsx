import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const BranchComponentLeftA =()=>{

    const{changeColor}  = useContext(MyContext)


    const handlerLightColor = ()=>{
        changeColor('light')
    }

    const handlerDarkColor =()=>{
        changeColor ('dark')
    }

    return(
        <div>
           <button onClick ={handlerLightColor}>Change Color Light</button>
            <button onClick={handlerDarkColor}>Change Color Dark</button>
        </div>
    )
}
export default BranchComponentLeftA