import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./loadingSlice";

const initialState = {
    products: [],
    errors: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setErrors: (state, action) => {
            state.errors = action.payload
        },
    }
})

export const fetchProducts = () => async (dispatch) => {
    dispatch(setIsLoading(true))
    try {
        const res = await fetch("/api/products")
        const data = await res.json()
        dispatch(setProducts(data))
    } catch (error) {
        dispatch(setErrors(error.toString()))
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const { setProducts, setErrors } = productsSlice.actions
export default productsSlice.reducer