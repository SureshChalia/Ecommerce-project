import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"
import cartReducer from "../slices/cartSlice"
import productSlice from "../slices/productSlice";

const rootReducer  = combineReducers({
    auth: authReducer,
    cart:cartReducer,
    product : productSlice,
})

export default rootReducer