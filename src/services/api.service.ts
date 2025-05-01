import {IComment} from "../Models/ModelComment/IComment.ts";
import {IResponse} from "../Models/ModelsResponse/IResponse.ts";

const UrlComments= import.meta.env.VITE_API_URL + '/comments'


const GetComments =async(): Promise<IComment[]>=>{
    const response: IResponse = await fetch (UrlComments)
        .then ((value)=>value.json())
    return response.comments
}
export{
    GetComments
}