const express = require("express");
const router = express.Router();
const multer=require("multer");
const ShoppingCard = require("../models/product");


const storage=multer.diskStorage(
  destination:(req,file,callback) => {
    callback(null,"./client/public/uploads/")
  },
  filename:(req,file,callback) => {
    callback(null,file.originalname)
  }
)


const upload=multer({storage:storage})

//get product
router.get("/", (req, res) => {
  ShoppingCard.find()
    .then((shoppingcard) => res.json(shoppingcard))
    .catch((err) => res.status(400).json(`Error:${err}`));
});

//post product
router.post("/add",upload.single("productImage") ,(req, res) => {
  const newProduct = new ShoppingCard({
    productName: req.body.productName,
    productCategory: req.body.productCategory,
    productPrice: req.body.productPrice,
    productImage:req.file.originalname
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

router.put("/update:id", upload.single("productImage"),(req, res) => {
  ShoppingCard.findById(req.params.id)
    .then((shoppingcard) => {
      shoppingcard.productName = req.body.productName;
      shoppingcard.productCategory = req.body.productCategory;
      shoppingcard.productPrice = req.body.productPrice;
      shoppingcard.productImage:req.file.originalname;

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
