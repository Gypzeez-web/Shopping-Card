import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");

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
      .post("http://localhost:8080/shoppingcard/add", shoppingcard)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container my-5">
      <h1>Add New Product</h1>
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
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
