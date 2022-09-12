import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const useSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('token', action.payload.user.accessToken);
        },
        logoutSuccess: (state, actions) => {
            localStorage.removeItem('token');
        }
    }
})


export const {
    loginSuccess,
    logoutSuccess
} = useSlice.actions;

export default useSlice.reducer;
