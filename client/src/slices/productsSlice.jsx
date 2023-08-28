import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (_, action) => action.payload
    }
})

export const fetchProducts = () => (dispatch) => {
    fetch("/api/products")
    .then(res => res.json())
    .then(data => dispatch(setProducts(data)))
    .catch(err => console.log(err))
}
export const { setProducts } = productsSlice.actions
export default productsSlice.reducer