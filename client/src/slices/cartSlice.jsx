import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setIsLoading } from "./loadingSlice";

const initialState = { items: [], totalPrice: 0, errors: null, isLoading: false }

export const addItemToCart = createAsyncThunk(
    "cart/addItem",
    async ({ productId, quantity}) => {
        const res = await fetch("/api/cart_items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                product_id: productId,
                quantity,
            }),
        })
        const data = await res.json()
        if (data.errors) throw new Error(data.errors)
        return data;
    }
)

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
        // setIsLoading: (state, action) => {
        //     state.isLoading = action.payload
        // },
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
    dispatch(setIsLoading(true))
    fetch("/api/cart_items")
    .then(res => res.json())
    .then(data => {
        dispatch(setCartItems(data))
        dispatch(setIsLoading(false))
    })
    .catch(err => {
        dispatch(setErrors(err))
        dispatch(setIsLoading(false))
    })
}

export const { setCartItems, clearCart, updateCartItem, removeCartItem, setErrors } = cartSlice.actions
export default cartSlice.reducer