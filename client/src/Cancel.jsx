import { NavLink } from "react-router-dom";

function Cancel() {
    return (
        <>
            <h1>Canceled Checkout!</h1>
            <NavLink to="/">
                <button>Back to Home!</button>
            </NavLink>
        </>
    )
}

export default Cancel;


// function () {
//     return (
//         <h1></h1>
//     )
// }

// export default