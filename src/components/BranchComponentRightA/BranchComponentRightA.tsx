import {useContext, useEffect} from "react";
import {MyContext} from "../../context/MyContext.tsx";
import './Theme.css'

const BranchComponentRightA =()=>{

    const {theme} = useContext(MyContext)
    useEffect(() => {
        document.body.className = theme
    }, [theme]);

    return(
        <div className={theme}>color {theme}</div>
    )
}
export default BranchComponentRightA