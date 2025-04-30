import {IComponent} from "../model/IComponent.ts";


const UrlTodos = import.meta.env.VITE_API_URL +'/todos'

const GetTodos= async(): Promise<IComponent[]>=>{
   return await fetch (UrlTodos)
        .then ((value)=>value.json())

}

export{
    GetTodos
}
