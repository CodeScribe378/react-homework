import {IComponent} from "../../model/IComponent.ts";
import {FC} from "react";
import './TodoComponent.css'
type TypeComponent={
    value: IComponent
}


const TodoComponent: FC <TypeComponent> = ({value})=>{

    return(
        <div>
                <h3>userId: {value.userId}</h3>
                <h4>title: {value.title}</h4>
                <p>completed: {value.completed.toString()}</p>

        </div>
    )
}
export default TodoComponent