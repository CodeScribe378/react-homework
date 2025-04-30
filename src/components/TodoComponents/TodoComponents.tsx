import {useEffect, useState} from "react";
import {IComponent} from "../../model/IComponent.ts";
import {GetTodos} from "../../services/api.service.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";


const TodoComponents= ()=>{

    const [todos, setTodos] = useState<IComponent[]>([])

    useEffect(()=>{
        GetTodos()
            .then((response)=>{
                setTodos(response)
            })

    }, [])

    return(
        <div>
        {todos.map((value)=> <TodoComponent key ={value.id} value={value}/>)}
        </div>
    )
}

export default TodoComponents