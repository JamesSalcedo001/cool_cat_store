import { NavLink } from "react-router-dom";

function Success() {
    return (
        <>
            <h1>Success! Thanks for Shopping!</h1>
            <NavLink to="/">
                <button>Back to Home!</button>
            </NavLink>
        </>
    )
}

export default Success;