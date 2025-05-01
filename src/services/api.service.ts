import {ITodos} from "../models/ITodos.ts";
import {IResponse} from "../models/modelsIResponse/IResponse.ts";

const urlTodos = import.meta.env.VITE_API_URL + '/todos'


const GetTodos = async(): Promise<ITodos[]>=>{
    const response: IResponse = await fetch (urlTodos)
        .then((value)=>value.json())
    return response.todos
}

export{
    GetTodos
}