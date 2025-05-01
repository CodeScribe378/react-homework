import {FC} from "react";


type ComponentImage={
    image: string
}

const ComponentImage: FC<ComponentImage> =({image})=>{
    return (
        <div>{image}</div>
    )
}
export default ComponentImage