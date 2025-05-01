import {ITodos} from "../../models/ITodos.ts";
import {FC} from "react";
import './ComponentTodos.css'

type MyPropType={
    todo: ITodos
}


const ComponentTodos: FC<MyPropType>=({todo})=>{
    return (
        <div className={'box'}>{todo.todo} - {todo.completed.toString()} - {todo.userId}</div>
    )
}
export default ComponentTodos