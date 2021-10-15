import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import "./App.css";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Products from "./components/products";
import AddProduct from "./components/addProduct";
import Product from "./components/product";
import EditProduct from "./components/editProduct";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/shoppingcard")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Products posts={posts} />} />
      <Route
        path="/shoppingcard/:id"
        render={(props) => <Product {...props} posts={posts} />}
      />
      <Route
        path="/update/:id"
        render={(props) => <EditProduct {...props} posts={posts} />}
      />
      <Route path="/add-product" component={AddProduct} />
      <Footer />
    </div>
  );
}

export default App;
