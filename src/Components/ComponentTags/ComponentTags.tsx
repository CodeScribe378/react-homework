import {FC} from "react";


type TypeTags={
    tag: string
}


const ComponentTags: FC<TypeTags> = ({tag})=>{
    return(
        <div>
            <ul>
                <li> {tag} </li>
            </ul>

        </div>
    )
}
export default ComponentTags