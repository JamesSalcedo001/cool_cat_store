import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { loadStripe } from "@stripe/stripe-js";
import { fetchCartItems, setErrors } from "./slices/cartSlice";

const stripeKey = import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY
const stripePromise = loadStripe(stripeKey)


function Cart() {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const errors = useSelector(state => state.cart.errors)


    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])

    const handleCheckout = async () => {
        if (cartItems.length > 0) {
            setIsLoading(true)
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
            const stripeMessage = res.ok ? await stripe.redirectToCheckout({ sessionId: data.id }).error : null
    
            if (!res.ok && stripeMessage) {   
                const errorMess = stripeMessage?.message || data.error
                dispatch(setErrors(errorMess))
                setTimeout(() => { dispatch(setErrors([])) }, 2000)
            }
            setIsLoading(false)
        } else {
            dispatch(setErrors("Please add items to cart first!"))
            setTimeout(() => { dispatch(setErrors([])) }, 2000)
        }
     
    }

    return (
        <div className="cart">
            {isLoading && <h3 className="loading">Just a moment...</h3>}
            {errors && <h5 className="error">{errors}</h5>}
            {cartItems.map(item => (
                <CartItemCard key={item.id} item={item}/>
            ))}
            <h5 className="total-price">
                Total: ${(totalPrice / 100).toFixed(2)}
            </h5>
            <button onClick={handleCheckout}>Check Out!</button>
        </div>
    )
}

export default Cart;