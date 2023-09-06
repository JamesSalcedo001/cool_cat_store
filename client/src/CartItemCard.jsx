import { useDispatch } from "react-redux";
import { fetchCartItems, removeCartItem, updateCartItem } from "./slices/cartSlice";
import { FiDelete } from "react-icons/fi";

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
                if (newQuantity === 0) {
                    dispatch(removeCartItem(item.id))
                } else {
                    dispatch(updateCartItem({
                        id: item.id,
                        quantity: newQuantity
                    }))
                }
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
            <img className="cart-item-image" src={item.product.image} alt={item.product.title}/>
            <h2 className="cart-item-title">{item.product.title}</h2>
            <h3 className="cart-item-price">Price: ${(item.product.price / 100).toFixed(2)}</h3>
            <label id="cart-quantity">
                Quantity:
                <input id="cart-item-input" type="number" value={item.quantity} onChange={quantityChange}/>
            </label>
            <button id="cart-item-button" onClick={removeClick}>Remove <FiDelete id="delete-icon-cart"/></button>
        </div>
    )
}

export default CartItemCard;