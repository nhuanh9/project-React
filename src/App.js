import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {login} from "./services/userService";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "./services/productService";

function App() {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.products);
    useEffect(()=> {
        getProducts(dispatch)
    }, [])
    return (
        <div>
            {products.map(item => (
                <h2>{item.name}</h2>
            ))}
        </div>
    );
}

export default App;
