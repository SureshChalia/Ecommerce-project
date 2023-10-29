const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
}

export const productEndpoints = {
  ADD_PRODUCT_API: BASE_URL + "/product/addProduct",
  GET_ALL_PRODUCTS_API:BASE_URL + "/product/getAllProducts"
}

export const userEndPoints = {
  GET_ALL_USERS_API: BASE_URL + "/users/getallusers",
}