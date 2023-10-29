const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName :{
    type:String,
    required:true,
    trim:true,
  },
  productDescription :{
    type:String,
    required:true,
    trim:true,
  },
  productPrice :{
    type:Number,
    required:true,
  },
  productImage :{
    type:String,
    required:true,
  }, 
});

module.exports = mongoose.model("Product",productSchema);