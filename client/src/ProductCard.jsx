import { useDispatch } from "react-redux";
import { fetchCartItems } from "./slices/cartSlice";


function ProductCard({ product }) {
    const dispatch = useDispatch()

    const addToCart = () => {
        fetch("/api/cart_items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                product_id: product.id,
                quantity: 1
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
        .catch(error => console.log(error))
    }

    return (
        <div className="card">
            <div className="card-image">
                <img id="product-image" src={product.image} alt={product.title} />
            </div>
            <div className="card-content">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-price">${product.price}</p>
                <p className="card-description">{product.description}</p>
                <button onClick={addToCart}>Add to Cart!</button>
            </div>
        </div>
    )
}

export default ProductCard;