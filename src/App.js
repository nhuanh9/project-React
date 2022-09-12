import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "./services/productService";
import {login} from "./services/userService";
import store from "./redux/store";

function App() {

  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products)
  const {user} = useSelector(state => state.user)
  useEffect(() => {
    getProducts(store.dispatch);
  }, []);
  return (
    <div className="a">
        {user != null && user.username}
      <button onClick={()=> {
        login({username:'linhcau', password:'123456'}, dispatch)
      }}>
        Login
      </button>
      {
        products.map(item => (
            <h1>{item.name}</h1>
        ))
      }
    </div>
  );
}

export default App;
