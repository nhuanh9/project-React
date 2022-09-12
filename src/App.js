import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {login} from "./services/userService";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    return (
        <div>
            {user != null && user.username}
            <Formik
                initialValues={
                    {
                        username: '',
                        password: ''
                    }
                }
                onSubmit={(values)=> {
                    login(values, dispatch);
                }}
            >
                <Form>
                    <Field name={'username'}></Field>
                    <Field name={'password'}></Field>
                    <button>Login</button>
                </Form>
            </Formik>
        </div>
    );
}

export default App;
