const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require(`dotenv`).config()
const app = express();


app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology:true
});

const connection = mongoose.connection;
connection.once("Open", () => 
  console.log("Database Successfully connected")
);

const shoppingcardRouter=require('./routes/product')
app.use('/shoppingcard',shoppingcardRouter)

app.listen(port,()=>{
    console.log("Server Successfully Working")
})
