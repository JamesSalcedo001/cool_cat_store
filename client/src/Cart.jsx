import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { loadStripe } from "@stripe/stripe-js";
import { fetchCartItems, setErrors, setIsLoading } from "./slices/cartSlice";

const stripeKey = import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY
const stripePromise = loadStripe(stripeKey)


function Cart() {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const errors = useSelector(state => state.cart.errors)
    const isLoading = useSelector(state => state.loading.isLoading)


    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])

    const handleCheckout = async () => {
        if (cartItems.length > 0) {
            dispatch(setIsLoading(true))
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
            dispatch(setIsLoading(false))
        } else {
            dispatch(setErrors("Please add items to cart first!"))
            setTimeout(() => { dispatch(setErrors([])) }, 2000)
        }
     
    }

    if(isLoading) {
        return (
            <div className='loadingSection'>
                <div className="loading"></div>
                <h3 className="load">Just a moment...</h3>
            </div>
        )
    } else {
        return (
            <div className="cart">
                {cartItems.map(item => (
                    <CartItemCard key={item.id} item={item}/>
                ))}
                <div className="footer">
                    <h1 id="total-price">
                        Total: ${(totalPrice / 100).toFixed(2)}
                    </h1>
                    <button id="checkout" onClick={handleCheckout}>Check Out!</button>
                </div>
                {errors && <h5 className="error">{errors}</h5>}
            </div>
        )
    }

}

export default Cart;