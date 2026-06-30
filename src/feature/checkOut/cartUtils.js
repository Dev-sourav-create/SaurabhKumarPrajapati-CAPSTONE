import { calculateTotal, updateItemSubtotal } from "./calculateTotalHelper";

export const handleAddToCart = (state, action) => {
  const pizza = action.payload;

  const existingItem = state.items.find((item) => item.id === pizza.id);

  if (existingItem) {
    existingItem.quantity++;
    updateItemSubtotal(existingItem);
  } else {
    const newItem = {
      ...pizza,
      quantity: 1,
    };

    updateItemSubtotal(newItem);

    state.items.push(newItem);
  }

  calculateTotal(state);
};

export const handleIncreaseQuantity = (state, action) => {
  const item = state.items.find((item) => item.id === action.payload);

  if (!item) return;

  item.quantity++;

  updateItemSubtotal(item);

  calculateTotal(state);
};

export const handleDecreaseQuantity = (state, action) => {
  const item = state.items.find((item) => item.id === action.payload);

  if (!item) return;

  if (item.quantity === 1) {
    state.items = state.items.filter((i) => i.id !== item.id);
  } else {
    item.quantity--;

    updateItemSubtotal(item);
  }

  calculateTotal(state);
};

export const handleRemoveFromCart = (state, action) => {
  state.items = state.items.filter((item) => item.id !== action.payload);

  calculateTotal(state);
};

export const handleClearCart = (state) => {
  state.items = [];
  state.totalPrice = 0;
  state.totalQuantity = 0;
};
