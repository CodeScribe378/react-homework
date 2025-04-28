import {FC} from "react";


type MyPropTypeModule={
    module: string
}

const Module: FC<MyPropTypeModule>=({module})=>{
    return (
        <li>{module}</li>
    )
}
export default Module