import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const existingItem = state.find(item => item._id === action.payload._id);
      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it with quantity 1
        state.push({ ...action.payload, quantity: 1 });
      }

    },
    remove: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
    resetCart: (state, action) => {
      return [];
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex((item) => item._id === itemId);
      if (itemIndex !== -1) {
        state[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex((item) => item._id === itemId);
      if (itemIndex !== -1 && state[itemIndex].quantity > 1) {
        state[itemIndex].quantity -= 1;
      }
    }
  }
  });
export const { add, remove, resetCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
