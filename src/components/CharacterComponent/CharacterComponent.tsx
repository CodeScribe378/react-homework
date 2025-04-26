import {ISimpsons} from "../../models/Simpsons.ts";
import {FC, ReactNode} from "react";
import './CharacterComponent.css'

type CharacterComponentType ={
    simpson: ISimpsons
    children?: ReactNode
}

const CharacterComponent: FC<CharacterComponentType> = ({simpson, children})=>{
    return(
        <div>
            <h3>{simpson.name}  {simpson.surname} {simpson.age} years old</h3>
            <img src={simpson.photo} alt=''/>
            <p>{children}</p>
        </div>

    )
}

export default CharacterComponent