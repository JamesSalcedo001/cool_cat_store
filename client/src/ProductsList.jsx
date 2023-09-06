import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./slices/productsSlice";

function ProductsList() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    const isLoading = useSelector(state => state.products.isLoading)

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    if (isLoading) {
        return (
            <div className='loadingSection'>
                <div className="loading"></div>
                <h3 className="load">Just a moment...</h3>
            </div>
        )
    } else {
        return (
            <div className="products-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))} 
            </div>
        )
    }
}

export default ProductsList;