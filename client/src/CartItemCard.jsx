import { useDispatch } from "react-redux";
import { fetchCartItems } from "./slices/cartSlice";

function CartItemCard ({ item }) {
    const dispatch = useDispatch()

    const quantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10)
        fetch(`/api/cart_items/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: newQuantity
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                console.log(data.errors)
            } else {
                dispatch(fetchCartItems())
            }
        })
    }

    const removeClick = () => {
        fetch(`/api/cart_items/${item.id}`, {
            method: "DELETE"
        })
        .then(() => {
            dispatch(fetchCartItems())
        })
    }


    return (
        <div className="cart-item-card">
            <img src={item.product.image} alt={item.product.title}/>
            <h4>{item.product.title}</h4>
            <h5>Price: ${item.product.price}</h5>
            <label>
                Quantity:
                <input type="number" value={item.quantity} onChange={quantityChange}/>
            </label>
            <button onClick={removeClick}>Remove from Cart</button>
        </div>
    )
}

export default CartItemCard;