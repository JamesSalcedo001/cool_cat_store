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

export const fetchProducts = () => (dispatch) => {
    dispatch(setIsLoading(true))
    fetch("/api/products")
    .then(res => res.json())
    .then(data => {
        dispatch(setProducts(data))
        dispatch(setIsLoading(false))
    })
    .catch(err => {
        dispatch(setErrors(err))
        dispatch(setIsLoading(false))
    })
}
export const { setProducts, setErrors, setIsLoading } = productsSlice.actions
export default productsSlice.reducer