import  axios from "axios";


export const axiosInstant = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
export const GetAll = async <T, >(endpoint: string)=>{
    const {data} = await axiosInstant.get(endpoint)
    return data as T
}