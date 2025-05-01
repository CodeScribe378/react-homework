import {useEffect, useState} from "react";
import {ITodos} from "../../models/ITodos.ts";
import {GetTodos} from "../../services/api.service.ts";
import ComponentTodos from "../ComponentTodos/ComponentTodos.tsx";


const ComponentsTodos=()=>{

    const [todos, setTodos] = useState<ITodos[]>([])

    useEffect(()=>{
       // GetTodos()
       //      .then((response)=>{
       //          setTodos(response)
       //      })

        const fetchTodos = async()=>{
            const todos = await GetTodos()
            setTodos(todos)
        }
        fetchTodos()


    }, [])

    return(
        <div>
            {todos.map((value)=><ComponentTodos key={value.id} todo={value}/>)}
        </div>

    )


}

export default ComponentsTodos