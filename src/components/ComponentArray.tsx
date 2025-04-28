import {IArrayCourses} from "../data/IArrayCourses.ts";
import {FC} from "react";
import './ComponentArray.css'
import Module from "../component-module/component-module.tsx";

type TypeComponentArray={
    course: IArrayCourses
}

const ComponentArray: FC<TypeComponentArray>=({course})=>{
    return (
        <div>
            <h2>{course.title}</h2>
            <p>month-duration: {course.monthDuration}</p>
            <p>hour-duration: {course.hourDuration}</p>
            <p>modules:</p>
            <ul>
                {course.modules.map((module, index)=><Module key ={index} module={module}/>)}
            </ul>
        </div>
    )
}
export default ComponentArray