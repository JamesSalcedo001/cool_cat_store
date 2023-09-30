import React, { memo, useCallback } from "react"
import { useDispatch } from "react-redux";
import { addItemToCart } from "./slices/cartSlice";
import {BiCartAdd} from "react-icons/bi"


function ProductCard({ product }) {
    const dispatch = useDispatch()

    const addToCart = useCallback(() => {
        dispatch(addItemToCart({ productId: product.id, quantity: 1 }))
    },[dispatch, product.id])

  

    return (
        <div className="card">
                <img id="product-image" src={product.image} alt={product.title} />
                <div className="card-content">
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-price">${(product.price / 100 ).toFixed(2)}</p>
                    <p className="card-description">{product.description}</p>
                    <button className="card-button" onClick={addToCart}><BiCartAdd id="add-to-cart"/> Add to Cart!</button>
                </div>
        </div>
    )
}

export default memo(ProductCard);







