import {loginSuccess} from "../redux/slices/userSlice";
import axios from "axios";

import customAxios from "./api"
const baseURL = 'http://localhost:8000/';
export const login = async ({username, password},dispatch) => {
    const res = await customAxios.post(baseURL+'login', {username, password});
    dispatch(loginSuccess({user: res.data}))
}
