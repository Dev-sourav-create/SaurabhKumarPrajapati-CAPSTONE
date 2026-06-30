import { useAppSelector } from "../../../hooks/useAppSelector";
import Card from "../../../sharedComponents/ui/Card";
import { selectCartItems, selectTotalPrice } from "../cartSelectors";
import CartItem from "./CartItem";

const MyCart = () => {
  const totalPrice = useAppSelector(selectTotalPrice);
  const items = useAppSelector(selectCartItems);

  return (
    <Card className="space-y-6 ">
      <h2 className="border-b sm:pb-4 pb-2 text-left sm:text-2xl text-lg sm:font-bold font-semibold">
        My Cart
      </h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        items.map((item) => <CartItem key={item.id} item={item} />)
      )}

      <div className="flex justify-end border-t pt-6">
        <span className="sm:text-lg font-bold">Sub Total : ₹{totalPrice}</span>
      </div>
    </Card>
  );
};

export default MyCart;
