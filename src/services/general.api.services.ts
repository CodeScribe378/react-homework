const baseUrl = import.meta.env.VITE_API_URL

 const GetGeneralFunction = async <T, > (endpoint:string):Promise<T>=>{
    return await fetch(baseUrl + endpoint)
        .then((value)=>value.json())
}
export{
    GetGeneralFunction
}
