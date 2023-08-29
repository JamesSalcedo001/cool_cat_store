import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { fetchCartItems } from "./slices/cartSlice";

const stripePromise = loadStripe("pk_test_51NRQXgIBnVrhy9EWUuHcfAxJ9khW1JRTo8ujz3pMNeyK4kZLyOnpOCJhvluaNqy9VPvNS3fQa4hmRtfLDy4AQvBg00N1jw5LeM")

//remember to regenerate new keys!!!!!

function Cart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartItems = useSelector(state => state.cart.items)
    const totalPrice = useSelector(state => state.cart.totalPrice)


    useEffect(() => {
        dispatch(fetchCartItems)
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

        if (res.ok) {
            const data = await res.json()
            const { error } = await stripe.redirectToCheckout({
                sessionId: data.id
            })
            if (!error) {
                navigate("/success")
            } else {
                console.log(error.message)
            }
        } else {
            console.log("failed checkout")
        }
    }

    return (
        <div className="cart">
            {cartItems.map(item => (
                <CartItemCard key={item.id} item={item}/>
            ))}
            <div className="total-price">
                Total: ${totalPrice.toFixed(2)}
            </div>
            <button onClick={handleCheckout}>Check Out!</button>
        </div>
    )
}

export default Cart;