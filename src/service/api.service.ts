
import {IResponsePosts} from "../models/Response/IResponsePosts.ts";
import {IPost} from "../models/IPost/IPost.ts";
const UrlPosts = import.meta.env.VITE_API_URL + '/posts'

const GetPosts = async ():Promise<IPost[]> => {
    const response: IResponsePosts = await fetch(UrlPosts)
        .then((value) => value.json());

    return response.posts;
};

export {
    GetPosts
};
