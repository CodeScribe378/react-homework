import {useEffect} from "react";
import {loginUser} from "../../services/api.services.ts";

const LoginComponent =()=>{


    useEffect(() => {
    loginUser({
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins:1
})

    }, []);


    return(
        <></>
    )
}
export default LoginComponent