import { useState } from "react";


// EXPERIMENTAL FORM FOR CREATING PRODUCTS AND PRICES ONLY FOR ADMIN


function ProductCreate() {
const [productFormData, setProductFormData] = useState({
    name: "",
    description: "",
    images: "",
})

const [priceFormData, setPriceFormData] = useState({
    unit_amount: "",
    currency: "",
    product: "",
})

const handleProductChange = (e) => {
    setProductFormData({
        ...productFormData,
        [e.target.name]: e.target.value,
    })
}

const handlePriceChange = (e) => {
    setPriceFormData({
        ...priceFormData,
        [e.target.name]: e.target.value,
    })
}


const handleProductSubmit = (e) => {
    e.preventDefault();
    console.log(productFormData);
    fetch("/api/create_stripe_product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...productFormData,
                images: [productFormData.images],
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        }
    )
}

const handlePriceSubmit = (e) => {
    e.preventDefault();
    console.log(priceFormData);
    fetch("/api/create_stripe_price", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(priceFormData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        }
    )
}


    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" value={productFormData.name} onChange={handleProductChange} placeholder="name"/>
                <input type="text" name="description" value={productFormData.description} onChange={handleProductChange} placeholder="descr"/>
                <input type="text" name="images" value={productFormData.images} onChange={handleProductChange} placeholder="images"/>
                <button type="submit">Create Product</button>
            </form>
            
            <form onSubmit={handlePriceSubmit}>
                <input type="text" name="unit_amount" value={priceFormData.unit_amount} onChange={handlePriceChange} placeholder="unit_amount"/>
                <input type="text" name="currency" value={priceFormData.currency} onChange={handlePriceChange} placeholder="currency"/>
                <input type="text" name="product" value={priceFormData.product} onChange={handlePriceChange} placeholder="product_id"/>
                <button type="submit">Create Price</button>
            </form>
        </div>
    )
}

export default ProductCreate;