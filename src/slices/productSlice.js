import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
   name:"Products",
   initialState:{
     products:[],
   },
   reducers:{
     addProduct:(state,action) => {
         state.products.push(action.payload);
     }
   }
})

export const {addProduct} = ProductSlice.actions;
export default ProductSlice.reducer;