import React, { useEffect, useMemo, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./slices/productsSlice";

const ProductCard = React.lazy(() => import("./ProductCard"));
import Loading from "./Loading";

function ProductsList() {
    const products = useSelector(state => state.products.products)
    const isLoading = useSelector(state => state.loading.isLoading)


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
        return <Loading />
    } else {
        return (
            <div className="products-list">
                <Suspense fallback={<Loading />}>
                    {productCards} 
                </Suspense>
            </div>
        )
    }
}

export default ProductsList;