import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "all", // all | veg | nonveg
  search: "",
  sortBy: "recommended", // recommended | priceLow | priceHigh | name
};

const orderPizzaSlice = createSlice({
  name: "orderPizza",

  initialState,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },

    setSearch(state, action) {
      state.search = action.payload;
    },

    setSort(state, action) {
      state.sortBy = action.payload;
    },

    resetFilters(state) {
      state.filter = "all";
      state.search = "";
      state.sortBy = "recommended";
    },
  },
});

export const { setFilter, setSearch, setSort, resetFilters } =
  orderPizzaSlice.actions;

export default orderPizzaSlice.reducer;
