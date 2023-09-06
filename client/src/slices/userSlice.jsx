import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loggedIn: false,
    errors: [],
    isLoading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.loggedIn = true
        },
        logout: (state) => {
            state.user = null
            state.loggedIn = false
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        updateUser: (state, action) => {
            state.user = action.payload
        },
        deleteUser: (state) => {
            state.user = null
            state.loggedIn = false
        },
        setErrors: (state, action) => {
            state.errors = action.payload
        }
    }
})

export const { login, logout, updateUser, deleteUser, setErrors, setIsLoading } = userSlice.actions;

export default userSlice.reducer;