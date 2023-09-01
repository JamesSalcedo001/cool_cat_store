import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { fetchCartItems, setErrors } from "./slices/cartSlice";

const stripeKey = import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY
const stripePromise = loadStripe(stripeKey)


function Cart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartItems = useSelector(state => state.cart.items)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const errors = useSelector(state => state.cart.errors)


    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])

    const handleCheckout = async () => {
        const stripe = await stripePromise
        const res = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                items: cartItems
            })
        })
        const data = await res.json()
        const stripeError = res.ok ? await stripe.redirectToCheckout({ sessionId: data.id }).error : null

        if (res.ok && !stripeError) {
            navigate("/success")
        } else {
            const errorMess = stripeError?.message || data.error
            dispatch(setErrors(errorMess))
            setTimeout(() => { dispatch(setErrors([])) }, 2000)
        }
    }

    return (
        <div className="cart">
            {errors && <div className="error">{errors}</div>}
            {cartItems.map(item => (
                <CartItemCard key={item.id} item={item}/>
            ))}
            <div className="total-price">
                Total: ${(totalPrice / 100).toFixed(2)}
            </div>
            <button onClick={handleCheckout}>Check Out!</button>
        </div>
    )
}

export default Cart;