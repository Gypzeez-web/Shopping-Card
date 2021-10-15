import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import wait from "../images/wait.gif";

const Products = ({ posts }) => {
  const [product, setProduct] = useState("");

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8080/shoppingcard/delete${id}`)
      .then((res) => alert(res.data))
      .catch((err) => console.log(err));
    setProduct(product.filter((elem) => elem._id !== id));
  };

  return (
    <div className="my-1">
      <h2 className="text-center">Our Products</h2>
      {!posts.length ? (
        <img
          style={{
            width: "10rem",
            display: "block",
            margin: "0 auto",
          }}
          src={wait}
          alt="Waiting"
        />
      ) : (
        posts.map((shoppingcard, key) => (
          <div className="container " key={key}>
            <img
              src={`http://localhost:8080/shoppingcard${shoppingcard.productImage}`}
              alt="..."
            />
            <Link to={{ pathname: `/shoppingcard/${shoppingcard._id}` }}>
              <h3>{shoppingcard.productName}</h3>
            </Link>
            <h4>{shoppingcard.productCategory}</h4>
            <h4 className="badge bg-secondary p-2">
              {shoppingcard.productPrice}
            </h4>
            <div className="row mt-1 mb-3">
              <div className="col-sm-2">
                <Link
                  className="btn btn-outline-success"
                  to={`/update/${shoppingcard._id}`}
                >
                  Edit
                </Link>
              </div>
              <div className="col-sm-2">
                <button
                  onClick={() => deleteProduct(shoppingcard._id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
