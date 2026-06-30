import {
  FilterBar,
  PizzaCard,
  PizzaGrid,
} from "../../feature/orderPizza/components";
import pizzas from "../../data/pizza.json";
import { selectFilteredPizzas } from "../../feature/orderPizza/orderPizzaUtils";
import { useAppSelector } from "../../hooks/useAppSelector";

export const OrderPizza = () => {
  const filteredPizzas = useAppSelector((state) =>
    selectFilteredPizzas(state, pizzas),
  );

  return (
    <section className="max-w-6xl mx-auto">
      <div className="mx-3">
        <FilterBar />
        <PizzaGrid pizzas={filteredPizzas} />
      </div>
    </section>
  );
};
