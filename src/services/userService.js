import axios from "axios";
import {loginSuccess} from "../redux/slices/userSlice";

const baseUrl = 'http://localhost:8000/';
export const login = async ({username, password}, dispatch) => {
    const res = await axios.post(baseUrl+'login', {username, password});
    dispatch(loginSuccess({user: res.data}))
}
