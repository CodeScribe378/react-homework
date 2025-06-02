import {useState} from "react";
import {MyPropContext} from "../context/context.tsx";
import MenuComponent from "../components/MenuComponent/MenuComponent.tsx";
import {Outlet} from "react-router-dom";


const MainLayout =()=>{

    const [body, setBody] = useState<string>('white')

    return (
        <div>

            <MyPropContext.Provider value={{
                background: body,
                changeColor:(newColor: string)=> {
                    console.log(newColor)
                    setBody(newColor)
                }
            }}>
                <MenuComponent/>
                <Outlet/>

            </MyPropContext.Provider>

        </div>
    )
}
export default MainLayout