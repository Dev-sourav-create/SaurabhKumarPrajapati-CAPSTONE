import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/checkOut/cartSlice";
import buildPizzaReducer from "./feature/buildPizza/buildPizzaSlice";
import orderPizzaReducer from "./feature/orderPizza/orderPizzaSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    buildPizza: buildPizzaReducer,
    orderPizza: orderPizzaReducer,
  },
});
