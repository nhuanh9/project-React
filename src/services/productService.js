import axios from "axios";
import {fetchProductList} from "../redux/slices/productSlice";
const baseUrl= 'http://localhost:8000/products'
export const getProducts = async (dispatch) => {
    const res = await axios.get(baseUrl);
    dispatch(fetchProductList({products: res.data}))
}
