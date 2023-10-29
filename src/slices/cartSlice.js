import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
    resetCart: (state, action) => {
      return [];
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToUpdate = state.find(item => item._id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToUpdate = state.find(item => item._id === itemId);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;
      }
    }
  }
  });
export const { add, remove, resetCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
