import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basePrice: 200,
  selectedIngredients: [],
};

const buildPizzaSlice = createSlice({
  name: "buildPizza",

  initialState,

  reducers: {
    toggleIngredient(state, action) {
      const ingredient = action.payload;

      const exists = state.selectedIngredients.find(
        (item) => item.id === ingredient.id,
      );

      if (exists) {
        state.selectedIngredients = state.selectedIngredients.filter(
          (item) => item.id !== ingredient.id,
        );
      } else {
        state.selectedIngredients.push(ingredient);
      }
    },

    resetBuilder(state) {
      state.selectedIngredients = [];
    },
  },
});

export const { toggleIngredient, resetBuilder } = buildPizzaSlice.actions;

export default buildPizzaSlice.reducer;
