import ProductCard from "./ProductCard";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./slices/productsSlice";

function ProductsList() {
    const products = useSelector(state => state.products.products)
    const isLoading = useSelector(state => state.products.isLoading)


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    const productCards = useMemo(() => (
        products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))
    ), [products])

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
                {productCards} 
            </div>
        )
    }
}

export default ProductsList;