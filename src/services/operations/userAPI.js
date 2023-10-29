import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { userEndPoints } from "../apis"


const {
  GET_ALL_USERS_API
} = userEndPoints

//get all users api
export const getAllUsers = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET",GET_ALL_USERS_API)
    if (!response) {
      throw new Error("Could Not Fetch All Products")
    }
    result = response.data
  } catch (error) {
    console.log("GET_ALL_USERS_API API Error............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}