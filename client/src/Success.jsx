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
        <>
            <h1>Success! Thanks for Shopping!</h1>
            <NavLink to="/">
                <button>Back to Home!</button>
            </NavLink>
        </>
    )
}

export default Success;