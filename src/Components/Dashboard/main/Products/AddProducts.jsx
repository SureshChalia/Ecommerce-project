import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"
import { addProductDetails } from '../../../../services/operations/productDetailsAPI'
import { addProduct } from '../../../../slices/productSlice'
const AddProducts = () => {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    productImage: null,
    productPrice: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "productImage") {
      setProduct({ ...product, [name]: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Product submitted:", product);
  
    try {
      const res = await addProductDetails(product, token);
      console.log(res, "result of add product");
      dispatch(addProduct(res));
      // remove toast
    } catch (error) {
      // remove toast
      console.log("error in add prodcut", error)
    }
    // Clear the form after submission
    setProduct({
      productName: "",
      productDescription: "",
      productImage: null,
      productPrice: "",
    });
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            className="form-input w-full border border-gray-400 rounded-md focus:outline-none h-8 pl-2 "
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Product Description
          </label>
          <textarea
            name="productDescription"
            value={product.productDescription}
            onChange={handleChange}
            className="form-textarea w-full border border-gray-400 rounded-md focus:outline-none pl-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Product Image
          </label>
          <input
            type="file"
            name="productImage"
            // value={product.productImage}
            onChange={handleChange}
            className="form-input w-full border border-gray-400 rounded-md focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Product Price
          </label>
          <input
            type="number"
            name="productPrice"
            value={product.productPrice}
            onChange={handleChange}
            className="form-input w-full border border-gray-400 rounded-md focus:outline-none h-8 pl-2"
            required
          />
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProducts