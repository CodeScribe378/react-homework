import {arraySimpsons} from "../../data/ArraySimpsons.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";

export const FamilyComponent= ()=>{
    return (
        <div>
            {
                arraySimpsons.map((simpson, index)=><CharacterComponent simpson={simpson} key={index}>
                    {simpson.info}
                </CharacterComponent>)
            }
        </div>
    )
}