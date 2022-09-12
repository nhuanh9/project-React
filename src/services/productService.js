import {fetchProduct} from "../redux/slices/productSlice";
import axios from "axios";
import customAxios from "./api"
const baseURL = 'http://localhost:8000/products';
export const getProducts = async (dispatch) => {
    const res = await customAxios.get(baseURL);
    dispatch(fetchProduct({products: res.data}))
}
