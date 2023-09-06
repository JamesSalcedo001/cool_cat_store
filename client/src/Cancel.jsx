import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";


function Cancel() {
    return (
        <div className="cancel">
            <h1>Canceled Checkout!</h1>
            <NavLink to="/">
                <button className="navigate-back"><BiHome/></button>
            </NavLink>
        </div>
    )
}

export default Cancel;


// function () {
//     return (
//         <h1></h1>
//     )
// }

// export default ;