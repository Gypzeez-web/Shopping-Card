import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/shoppingcard/${props.match.params.id}`)
      .then((res) => {
        setProductName(res.data.productName);
        setProductCategory(res.data.productCategory);
        setProductPrice(res.data.productPrice);
        setFileName(res.data.productImage);
      })
      .catch((error) => console.log(error));
  }, [props]);

  return (
    <div className="container my-3">
      <img
              src={`/uploads/${fileName}`}
              alt="..."
            />
      <h3>{productName}</h3>
      <h4>{productCategory}</h4>
      <h4>{productPrice}</h4>
      <Link to="/" type="submit" className="btn btn-primary">
        Back To Home
      </Link>
    </div>
  );
};

export default Product;
