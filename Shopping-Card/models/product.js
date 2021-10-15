const mongoose = require("mongoose");

const ShoppingCardSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  postDate:{
    type: Date,
    default:Date.now
  }
});

const ShoppingCard = mongoose.model("ShoppingCards", ShoppingCardSchema);
module.exports = ShoppingCard;
