
import './App.css'
import {courses} from "./data/ArrayCourse.ts";
import CourseAndMonthDuration from "./components/CourseAndMonthDuration.tsx";


function App() {

  return (
      <>
        <ul>
        {
          courses.map((course, index)=><CourseAndMonthDuration key={index} course={course}/>
              )
        }
        </ul>
      </>

  );
}

export default App
