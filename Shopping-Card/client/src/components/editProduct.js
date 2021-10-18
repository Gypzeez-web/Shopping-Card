import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProduct = (props) => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [message, setMessage] = useState("");

  const changeOnClick = (e) => {
    e.preventDefault();

    const shoppingcard = {
      productName,
      productCategory,
      productPrice,
    };

    setProductName("");
    setProductCategory("");
    setProductPrice("");

    axios
      .put(
        `http://localhost:8080/shoppingcard/update${props.match.params.id}`,
        shoppingcard
      )
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/shoppingcard/${props.match.params.id}`)
      .then((res) => {
        setProductName(res.data.productName);
        setProductCategory(res.data.productCategory);
        setProductPrice(res.data.productPrice);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container my-5">
      <h1>Update Product</h1>
      <span className="text-weight-bold text-info">{message}</span>
      <form onSubmit={changeOnClick} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            onChange={(e) => setProductName(e.target.value)}
            className="form-control"
            value={productName}
            id="productName"
            placeholder="Enter Product Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productCategory">Product Category</label>
          <input
            type="text"
            onChange={(e) => setProductCategory(e.target.value)}
            className="form-control"
            value={productCategory}
            id="productCategory"
            placeholder="Enter Product Category"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="text"
            onChange={(e) => setProductPrice(e.target.value)}
            className="form-control"
            value={productPrice}
            id="productPrice"
            placeholder="Enter Product Price"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Edit Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
