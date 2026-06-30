export const selectBasePrice = (state) => state.buildPizza.basePrice;

export const selectSelectedIngredients = (state) =>
  state.buildPizza.selectedIngredients;

export const selectBuildPizzaTotal = (state) => {
  const ingredientsTotal = state.buildPizza.selectedIngredients.reduce(
    (sum, ingredient) => sum + ingredient.price,
    0,
  );

  return state.buildPizza.basePrice + ingredientsTotal;
};
