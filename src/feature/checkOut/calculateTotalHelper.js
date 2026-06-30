export const calculateTotal = (state) => {
  state.totalQuantity = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  state.totalPrice = state.items.reduce((sum, item) => sum + item.subtotal, 0);
};

export const updateItemSubtotal = (item) => {
  item.subtotal = item.price * item.quantity;
};
