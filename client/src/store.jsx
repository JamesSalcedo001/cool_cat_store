import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice"
import cartReducer from "./slices/cartSlice"
import loadingReducer from "./slices/loadingSlice"

const store = configureStore({
    reducer: 
    { 
        user: userReducer,
        products: productsReducer,
        cart: cartReducer,
        loading: loadingReducer,
    }
})

export default store;