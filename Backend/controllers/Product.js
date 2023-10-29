const Product = require("../models/Product");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

//for adding products 

exports.addProduct = async (req, res) => {
  try {
     // Get user ID from request object
     const userId = req.user.id;
    // fetch data 
    let {
      productName,
      productDescription,
      productPrice,
    } = req.body;
    //get product image
    const productImage = req.files.productImage;

    //validation :- Check if any of the required fields are missing
    if (!productName ||
      !productDescription ||
      !productPrice ||
      !productImage) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    
    //upload image to cloudiinary
    const image = await uploadImageToCloudinary(productImage, process.env.FOLDER_NAME)

    //create an entry for new product in db
    const newProduct = await Product.create({
      productName,
      productDescription,
      productPrice,
      productImage: image.secure_url,
    });

    //return response
    return res.status(200).json({
      success: true,
      message: "Product added successfully",
      data: newProduct,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Filed to add product",
      error: error.message,
    });
  }
};


// for getting all product 

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error while fetching all products' });
  }
};