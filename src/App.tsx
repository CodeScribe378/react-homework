import './App.css'
import {coursesArray} from "./models/arrayCourses.ts";
import ComponentArray from "./components/ComponentArray.tsx";


function App() {
  return (
      <>
        {
          coursesArray.map((course, index)=><ComponentArray key ={index} course={course}/>
          )}
      </>
  )
}

export default App


