import {IArrayCourses} from "../data/IArrayCourses.ts";
import {FC} from "react";
import './ComponentArray.css'


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
                {course.modules.map((module, index)=>(<li key={index}>{module}</li>))}
            </ul>
        </div>
    )
}
export default ComponentArray