import {fetchProduct} from "../redux/slices/productSlice";
import axios from "axios";

const baseURL = 'http://localhost:8000/products';
export const getProducts = async (dispatch) => {
    const res = await axios.get(baseURL);
    dispatch(fetchProduct({products: res.data}))
}
