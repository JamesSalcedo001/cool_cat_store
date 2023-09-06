import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "./slices/cartSlice"

function Success() {
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("/api/clear", {
            method: "DELETE",
        })
        .then(res => {
            if (!res.ok) {
                console.log("server failed to clear cart", res)
            } else {
                dispatch(clearCart())
            }
        })
        .catch(error => console.log(error))
    },[dispatch])

    return (
        <div className="success">
            <h1>Success! Thanks for Shopping!</h1>
            <NavLink to="/">
                <button className="navigate-back">Back to Home!</button>
            </NavLink>
        </div>
    )
}

export default Success;