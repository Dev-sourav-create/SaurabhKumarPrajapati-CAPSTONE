import React from "react";
import Card from "../../../sharedComponents/ui/Card";
import Button from "../../../sharedComponents/button";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addToCart } from "../../checkOut/cartSlice";

const PizzaCard = ({ pizza }) => {
  const dispatch = useAppDispatch();
  return (
    <section className="grid grid-cols-[2fr_1fr] sm:gap-6 rounded-2xl border border-gray-200 bg-white p-4  shadow-sm transition hover:shadow-lg">
      {/* Left */}
      <div className="flex flex-col items-start text-left gap-4">
        <h2 className="font-bold text-xl">{pizza.name}</h2>

        <span className="font-semibold text-lg">₹290</span>

        <p className="text-sm ">{pizza.description}</p>

        <div className="border-t border-dashed border-gray-300 pt-3 text-sm leading-4.5 gap-3 flex flex-col">
          <p className="">
            <span className="font-semibold">Ingredients:</span>{" "}
            {pizza.ingredients.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Toppings:</span> {pizza.topping}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 overflow-hidden rounded-full">
          <img className="h-full w-full object-cover" src={pizza.image} />
        </div>

        <Button fullWidth onClick={() => dispatch(addToCart(pizza))}>
          Add
        </Button>
      </div>
    </section>
  );
};

export default PizzaCard;
