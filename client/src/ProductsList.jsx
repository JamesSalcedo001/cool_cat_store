import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./slices/productsSlice";

function ProductsList() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    return (
        <div className="products-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))} 
        </div>
    )
}

export default ProductsList;