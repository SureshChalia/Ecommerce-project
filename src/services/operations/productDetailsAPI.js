import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { productEndpoints } from "../apis"


const {
  ADD_PRODUCT_API,GET_ALL_PRODUCTS_API
} = productEndpoints



// add the course details
export const addProductDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", ADD_PRODUCT_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    
    if (!response?.data?.success) {
      throw new Error("Could Not Add Product Details")
    }
    toast.success("Product Details Added Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("Add Product API Error............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
//get all products api
export const getAllProducts = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_ALL_PRODUCTS_API)
    if (!response) {
      throw new Error("Could Not Fetch All Products")
    }
    result = response?.data
  } catch (error) {
    console.log("GET_ALL_PRODUCTS_API API Error............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}