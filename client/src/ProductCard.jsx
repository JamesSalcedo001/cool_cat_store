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
                <img id="product-image" src={product.image} alt={product.title} />
                <h3 className="card-title">{product.title}</h3>
                <p className="card-price">${(product.price / 100 ).toFixed(2)}</p>
                <p className="card-description">{product.description}</p>
                <button onClick={addToCart}>Add to Cart!</button>
        </div>
    )
}

export default ProductCard;