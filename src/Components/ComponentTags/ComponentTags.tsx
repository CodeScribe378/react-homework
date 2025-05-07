import {FC} from "react";


type TypeTags={
    tag: string
}


const ComponentTags: FC<TypeTags> = ({tag})=>{
    return(
        <div>
            <div>{tag}</div>
        </div>
    )
}
export default ComponentTags