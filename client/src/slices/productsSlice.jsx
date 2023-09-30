import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    errors: null,
    isLoading: false
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
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

export const { setProducts, setErrors, setIsLoading } = productsSlice.actions
export default productsSlice.reducer