import {createContext} from "react";


type MyContextType ={

    theme: string,
    changeColor: (newTheme: string)=>void

}
export const init = {

        theme: 'light',
        changeColor: (newTheme: string)=> {
            console.log(newTheme)
    }

}
export const MyContext = createContext<MyContextType>(init)