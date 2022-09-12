import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: []
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProduct: (state, action) => {
            console.log(action)
            state.products = action.payload.products;
        },
        createProduct: (state, action) => {
            state.products.push(action.payload);
        },
    }
})
export const  {
    fetchProduct,
    createProduct
} = productSlice.actions;
export default productSlice.reducer;
