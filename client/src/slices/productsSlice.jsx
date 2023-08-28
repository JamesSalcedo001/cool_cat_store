import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (_, action) => action.payload
    }
})

export const fetchProducts = () => async (dispatch) => {
    try {
        const res = await fetch("/api/products")
        const data = await res.json()
        dispatch(setProducts(data))
    } catch (error) {
        console.error("products fetch failed", error)
    }
}

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer