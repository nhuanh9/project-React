import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "./services/productService";
import store from "./redux/store";

function App() {

  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products)
  useEffect(() => {
    getProducts(store.dispatch);
  }, []);
  return (
    <div className="a">
      {
        products.map(item => (
            <h1>{item.name}</h1>
        ))
      }
    </div>
  );
}

export default App;
