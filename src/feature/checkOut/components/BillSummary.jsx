import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

import { selectBasePrice } from "../../buildPizza/buildPizzaSelectors";

import { resetBuilder } from "../../buildPizza/buildPizzaSlice";
import { clearCart } from "../../checkOut/cartSlice";

import Button from "../../../sharedComponents/button";
import Card from "../../../sharedComponents/ui/Card";
import { selectCartItems, selectTotalPrice } from "../cartSelectors";

const BillSummary = () => {
  const dispatch = useAppDispatch();

  const basePrice = useAppSelector(selectBasePrice);
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  const handlePay = () => {
    alert("Thank you for your Purchase:)");
    dispatch(clearCart());
  };

  return (
    <Card>
      <h2 className="border-b border-gray-200 pb-4 text-left sm:text-2xl text-lg font-semibold sm:font-bold">
        Bill Summary
      </h2>

      <div className="grid gap-4 border-b border-gray-200 py-4">
        {/* Base Pizza */}

        {cartItems.map((item) => (
          <div key={item.id} className="border-b border-gray-200 py-4">
            {/* Pizza Name */}
            <div className="mb-2 flex justify-between font-semibold">
              <span>{item.name}</span>
              <span>₹{item.subtotal}</span>
            </div>

            {/* Show only for custom pizza */}
            {item.type === "custom" && (
              <div className="ml-4 space-y-2">
                {/* Ingredients */}
                <details className="text-sm">
                  <summary className="cursor-pointer font-medium text-left">
                    Ingredients
                  </summary>

                  <div className="mt-2 space-y-2 pl-4">
                    {item.ingredients.map((ingredient) => (
                      <div
                        key={ingredient.id}
                        className="flex justify-between text-gray-600"
                      >
                        <span>{ingredient.tname}</span>
                        <span>₹{ingredient.price}</span>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Total */}

      <div className="grid gap-4 py-4">
        <div className="flex justify-between lg:text-lg font-semibold sm:font-bold">
          <span>Total</span>

          <span>₹{totalPrice}</span>
        </div>

        <div className="flex gap-3">
          <Button onClick={handlePay} fullWidth>
            Pay
          </Button>

          <Button
            fullWidth
            variant="secondary"
            onClick={() => dispatch(clearCart())}
          >
            Clear
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BillSummary;
