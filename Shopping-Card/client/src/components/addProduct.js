import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [fileName, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

  
    const formData=new FormData();
    formData.append("productName",productName);
    formData.append("productCategory",productCategory);
    formData.append("productPrice",productPrice);
    formData.append("productImage",fileName);

    setProductName("");
    setProductCategory("");
    setProductPrice("");
    setFileName("");

    axios
      .post("http://localhost:8080/shoppingcard/add", formData)
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
        <div className="form-group">
          <label htmlFor="productImagee">Product Image</label>
          <input
            type="file"
            className="form-control"
            fileName="productImage"
            placeholder="Insert Product Image"
            onChange={onChangeFile}
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
