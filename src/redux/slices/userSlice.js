import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            console.log(action)
            state.user = action.payload.user;
            localStorage.setItem("token", action.payload.user.token);
        },
        logoutSuccess: (state, action) => {
            state.products.push(action.payload);
        },
    }
})
export const  {
    loginSuccess,
    logoutSuccess
} = userSlice.actions;
export default userSlice.reducer;
