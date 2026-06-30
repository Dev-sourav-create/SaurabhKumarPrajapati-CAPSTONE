import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./feature/checkOut/cartSlice";
import buildPizzaReducer from "./feature/buildPizza/buildPizzaSlice";
import orderPizzaReducer from "./feature/orderPizza/orderPizzaSlice";

import storageImport from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  cart: cartReducer,
  buildPizza: buildPizzaReducer,
  orderPizza: orderPizzaReducer,
});

const storage = storageImport.default ?? storageImport;
const persistConfig = {
  key: "root",
  storage,

  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
