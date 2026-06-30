import ingredients from "../../data/ingredients.json";
import { Title } from "../../feature/buildPizza/components";
import Card from "../../sharedComponents/ui/Card";
import pizzaIngredients from "../../data/ingredients.json";
import { IngredientGrid } from "../../feature/buildPizza/components/IngredientGrid";
import Button from "../../sharedComponents/button";
import { addToCart } from "../../feature/checkOut/cartSlice";
import { useAppSelector } from "../../hooks/useAppSelector";

import {
  selectBasePrice,
  selectBuildPizzaTotal,
  selectSelectedIngredients,
} from "../../feature/buildPizza/buildPizzaSelectors";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { resetBuilder } from "../../feature/buildPizza/buildPizzaSlice";
import { useNavigate } from "react-router-dom";

export const BuildPizza = () => {
  const title = "Build Ur Pizza";
  const sutitle =
    "Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing ingredients from the list given below";

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const basePrice = useAppSelector(selectBasePrice);
  const ingredients = useAppSelector(selectSelectedIngredients);
  const total = useAppSelector(selectBuildPizzaTotal);

  const handleAdd = () => {
    if (ingredients.length === 0) {
      alert("Please select at least one ingredient!");
      return;
    }

    dispatch(
      addToCart({
        cartId: crypto.randomUUID(),
        type: "custom",
        name: "DIY Pizza",
        basePrice,
        ingredients,
        price: total,
      }),
    );

    dispatch(resetBuilder());

    navigate("/cart");
  };

  return (
    <section className="max-w-6xl mx-auto ">
      <Card padding="sm">
        <div className="flex flex-col gap-8">
          <Title title={title} subtitle={sutitle} />
          <IngredientGrid pizzaIngredients={pizzaIngredients} />

          <div className="items-center gap-4 flex flex-col">
            <span className="font-bold text-2xl">Total Cost: {total}</span>
            <Button onClick={handleAdd} size="lg">
              Build Ur Pizza
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};
