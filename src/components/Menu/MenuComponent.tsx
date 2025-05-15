import {Link} from "react-router-dom";

const MenuComponent =()=>{
    return(
        <div>
            <ul>
                <li>
                    <Link to={'/cars'}>Cars</Link>
                </li>
                <li>
                    <Link to={'/cars/create'}>Create Car</Link>
                </li>
            </ul>
        </div>
    )
}
export default MenuComponent