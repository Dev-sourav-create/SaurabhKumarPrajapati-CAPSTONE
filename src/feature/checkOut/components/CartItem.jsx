import plusIcon from "../../../assets/plus.svg";
import minusIcon from "../../../assets/minus.svg";
import deleteIcon from "../../../assets/delete.svg";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectCartItems, selectTotalPrice } from "../cartSelectors";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../cartSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

const CartItem = ({ item }) => {
  const itemSubtotal = item.price * item.quantity;
  const totalPrice = useAppSelector(selectTotalPrice);

  const dispatch = useAppDispatch();
  console.log(item);

  return (
    <div className="flex items-center justify-between gap-6 border-b pb-3 border-gray-200 sm:pb-8">
      {/* image */}
      <img
        src={item.image}
        alt="Pizza"
        className="sm:h-18 sm:w-18 h-14 w-14 rounded-full object-cover shadow"
      />

      {/* Details */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="space-y-3 flex flex-col items-start">
          <div className="flex items-center justify-start  gap-2">
            <div>
              <h3 className=" font-bold">{item.name}</h3>
              <p></p>
            </div>
            <div className="h-4 w-4 flex items-center justify-center rounded border-2 border-red-500">
              <div className=" h-2 w-2  bg-red-500" />
            </div>
          </div>
          <p className="text-slate-600 text-sm">₹{item.price}</p>
        </div>

        {/* Quantity */}

        <div className=" flex overflow-hidden  w-22 rounded border">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="bg-slate-200 px-2 py-2"
          >
            <img src={minusIcon} className="w-3 h-3" alt="" />
          </button>

          <span className="flex w-8 items-center justify-center">
            {item.quantity}
          </span>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="bg-slate-200 px-2 py-2"
          >
            <img src={plusIcon} className="w-3 h-3 " alt="" />
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* price */}
        <span className="font-bold text-sm">₹{itemSubtotal}</span>

        {/* delete */}

        <button onClick={() => dispatch(removeFromCart(item.id))}>
          <img src={deleteIcon} className="w-5 h-5" alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
