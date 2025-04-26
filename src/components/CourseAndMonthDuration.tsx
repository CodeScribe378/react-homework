import {IArrayCourseAndMonthDuration} from "../models/ArrayCourseAndMonthDuration.ts";
import {FC} from "react";
import './CourseAndMonthDuration.css'

type MyCourseType= {
    course: IArrayCourseAndMonthDuration
}



const MyCourse: FC<MyCourseType>=({course})=>{
    return (
        <li>{course.title} - {course.monthDuration}</li>
    )
}
export default MyCourse