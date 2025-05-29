
import './App.css'
import BranchComponentLeft from "./components/BranchComponentLeft/BranchComponentLeft.tsx";
import BranchComponentRight from "./components/BranchComponentsRight/BranchComponentRight.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";



function App() {
  const [color, setColor] = useState<string>('light')


  return (
    <>
      <MyContext.Provider value={{
          theme: color,
          changeColor: (newTheme: string)=> {
            setColor(newTheme)
          }
      }}>
      <BranchComponentLeft/>
      <BranchComponentRight/>
      </MyContext.Provider>
    </>
  )
}

export default App
