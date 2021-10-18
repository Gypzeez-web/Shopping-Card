import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/shoppingcard/${props.match.params.id}`)
      .then((res) => {
        setProductName(res.data.productName);
        setProductCategory(res.data.productCategory);
        setProductPrice(res.data.productPrice);
      })
      .catch((error) => console.log(error));
  }, [props]);

  return (
    <div className="container my-3">
      <h3>Name:{productName}</h3>
      <h4>Category:{productCategory}</h4>
      <h4>Price:{productPrice}</h4>
      <Link to="/" type="submit" className="btn btn-primary">
        Back To Home
      </Link>
    </div>
  );
};

export default Product;
