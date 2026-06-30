import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredPizzas = createSelector(
  [
    (_, pizzas) => pizzas,
    (state) => state.orderPizza.filter,
    (state) => state.orderPizza.search,
    (state) => state.orderPizza.sortBy,
  ],
  (pizzas, filter, search, sortBy) => {
    let filtered = [...pizzas];

    if (filter !== "all") {
      filtered = filtered.filter((pizza) => pizza.type === filter);
    }

    if (search.trim()) {
      filtered = filtered.filter((pizza) =>
        pizza.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    switch (sortBy) {
      case "priceLow":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "priceHigh":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        break;
    }

    return filtered;
  },
);
