import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import {Field, Form, Formik} from "formik";

function App() {

    return (
        <div>
            <Formik
                initialValues={
                    {
                        username: '',
                        password: ''
                    }
                }
                onSubmit={(values)=> {
                    console.log(values)
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
