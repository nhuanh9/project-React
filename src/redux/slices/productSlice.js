import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: []
}
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        fetchProductList: (state, action) => {
            state.products = action.payload.products
        }
    }
})


export const {fetchProductList} = productSlice.actions;
export default productSlice.reducer;
