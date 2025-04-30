import {FC} from "react";


type TagsType={
    item: string
}

const ComponentTags:FC<TagsType> =({item})=>{
    return (
        <div><li>{item}</li></div>

    )
}
export default ComponentTags