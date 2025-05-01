import {FC} from "react";


type TagsType={
    item: string
}

const ComponentTags: FC<TagsType> =({item})=>{

    return (
        <ul>
        <li>{item}</li>
        </ul>
    )
}
export default ComponentTags