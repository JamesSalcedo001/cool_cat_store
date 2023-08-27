import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loggedIn: false,
    errors: []
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

export const { login, logout, updateUser, deleteUser, setErrors } = userSlice.actions;

export default userSlice.reducer;