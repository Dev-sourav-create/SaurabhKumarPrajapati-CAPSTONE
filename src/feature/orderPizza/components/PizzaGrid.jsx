import PizzaCard from "./PizzaCard";

const PizzaGrid = ({ pizzas }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaGrid;
