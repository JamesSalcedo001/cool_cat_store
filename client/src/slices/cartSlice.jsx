import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalPrice: 0 }

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload
            state.totalPrice = action.payload.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        }
    }
})

export const fetchCartItems = () => (dispatch) => {
    fetch("/api/cart_items")
    .then(res => res.json())
    .then(data => {
        dispatch(setCartItems(data))
    })
    .catch(err => {
        console.error("couldn't fetch cart items", err)
    })
}

export const { setCartItems } = cartSlice.actions
export default cartSlice.reducer