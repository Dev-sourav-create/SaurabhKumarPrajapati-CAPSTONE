import React from "react";
import IngredientCard from "./IngredientCard";

import { toggleIngredient } from "../buildPizzaSlice";
import { selectSelectedIngredients } from "../buildPizzaSelectors";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

export const IngredientGrid = ({ pizzaIngredients }) => {
  const dispatch = useAppDispatch();

  const selectedIngredients = useAppSelector(selectSelectedIngredients);

  return (
    <section className="flex flex-col items-center">
      {pizzaIngredients.map((ingredient) => {
        const checked = selectedIngredients.some(
          (item) => item.id === ingredient.id,
        );

        return (
          <IngredientCard key={ingredient.id}>
            <IngredientCard.Icon icon={ingredient.image} />

            <IngredientCard.IngredientDetails
              ingredientName={ingredient.tname}
              price={ingredient.price}
            />

            <IngredientCard.InputCheckBox
              id={ingredient.id}
              checked={checked}
              onChange={() => dispatch(toggleIngredient(ingredient))}
            />
          </IngredientCard>
        );
      })}
    </section>
  );
};
