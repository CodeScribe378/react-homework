import {createContext} from "react";



type TypeContext ={
    background: string,
    changeColor:(newColor: string)=>void
}

const init={
    background: 'white',
    changeColor:(newColor: string)=>{
        console.log(newColor)
    }
}

export const MyPropContext = createContext<TypeContext>(init)


