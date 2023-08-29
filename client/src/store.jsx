import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice"
import cartReducer from "./slices/cartSlice"

const store = configureStore({
    reducer: 
    { 
        user: userReducer,
        products: productsReducer,
        cart: cartReducer
    }
})

export default store;