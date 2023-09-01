import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalPrice: 0, errors: null }

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload
            state.totalPrice = action.payload.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        },
        updateCartItem: (state, action) => {
            const newItem = action.payload
            const currentItem = state.items.find(item => item.id === newItem.id)
            if (currentItem) {
                currentItem.quantity = newItem.quantity
            }
            state.totalPrice = state.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        },
        removeCartItem: (state, action) => {
            const cart_item_id = action.payload
            state.items = state.items.filter(item => item.id !== cart_item_id)
            state.totalPrice = state.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        },
        setErrors: (state, action) => {
            state.errors = action.payload
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
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
        dispatch(setErrors(err))
    })
}

export const { setCartItems, clearCart, updateCartItem, removeCartItem, setErrors } = cartSlice.actions
export default cartSlice.reducer