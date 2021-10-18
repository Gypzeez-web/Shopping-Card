const express = require("express");
const router = express.Router();
const ShoppingCard = require("../models/product");

//get product
router.get("/", (req, res) => {
  ShoppingCard.find()
    .then((shoppingcard) => res.json(shoppingcard))
    .catch((err) => res.status(400).json(`Error:${err}`));
});

//post product
router.post("/add", (req, res) => {
  const newProduct = new ShoppingCard({
    productName: req.body.productName,
    productCategory: req.body.productCategory,
    productPrice: req.body.productPrice,
  });

  newProduct
    .save()
    .then(() => res.json("The Product is Posted"))
    .catch((err) => res.status(400).json(`Error${err}`));
});

//find product by id
router.get("/:id", (req, res) => {
  ShoppingCard.findById(req.params.id)
    .then((shoppingcard) => res.json(shoppingcard))
    .catch((err) => res.status(400).json(`Error${err}`));
});

//find product by id and update

router.put("/update:id", (req, res) => {
  ShoppingCard.findById(req.params.id)
    .then((shoppingcard) => {
      shoppingcard.productName = req.body.productName;
      shoppingcard.productCategory = req.body.productCategory;
      shoppingcard.productPrice = req.body.productPrice;

      shoppingcard
        .save()
        .then(() => res.json("Product Update Successfuly"))
        .catch((err) => res.status(400).json(`Error${err}`));
    })
    .catch((err) => res.status(400).json(`Error${err}`));
});

//find product by id and delete
router.delete("/:id", (req, res) => {
  ShoppingCard.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product Deleted"))
    .catch((err) => res.status(400).json(`Error${err}`));
});

module.exports = router;
