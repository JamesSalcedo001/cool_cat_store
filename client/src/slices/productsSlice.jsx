import { createSlice } from "@reduxjs/toolkit";

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

export const fetchProducts = () => (dispatch) => {
    fetch("/api/products")
    .then(res => res.json())
    .then(data => dispatch(setProducts(data)))
    .catch(err => {
        dispatch(setErrors(err))
    })
}
export const { setProducts, setErrors } = productsSlice.actions
export default productsSlice.reducer