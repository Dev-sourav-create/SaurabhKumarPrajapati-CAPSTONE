import { createSlice } from "@reduxjs/toolkit";
import {
  handleAddToCart,
  handleRemoveFromCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleClearCart,
} from "./cartUtils";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart(state, action) {
      handleAddToCart(state, action);
    },

    removeFromCart(state, action) {
      handleRemoveFromCart(state, action);
    },

    increaseQuantity(state, action) {
      handleIncreaseQuantity(state, action);
    },

    decreaseQuantity(state, action) {
      handleDecreaseQuantity(state, action);
    },

    clearCart(state) {
      handleClearCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
