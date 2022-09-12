import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home/Home";
import React from "react";
import Login from "./pages/Login/Login";
import {Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <div className={'container-fluid'}>
            <div className={'row '}>
                <div className={'col-12'}>
                    <Routes>
                        <Route path={'/'} element={<Login/>}></Route>
                        <Route path={'home'} element={<Home/>}>

                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;


// npm install @reduxjs/toolkit
// npm i formik
// npm i react-router-dom
// npm i axios
