import {useContext} from "react";
import {MyPropContext} from "../../context/context.tsx";
import './Theme.css'

const CompoenentLeftA =()=>{


    const {background} = useContext(MyPropContext)
    console.log(background)

    return (
        <div className={background}>color:{background}
        </div>
    )
}
export default CompoenentLeftA