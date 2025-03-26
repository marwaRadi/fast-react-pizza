import { useDispatch, useSelector } from "react-redux";
import {
  decreasePizzaQuantity,
  increasePizzaQuantity,
} from "../features/cart/cartSlice";

function QuantitySelector({ id }) {
  const dispatch = useDispatch();
  const quantity = useSelector(
    (store) => store.cart.cart.find((item) => item.pizzaId === id).quantity
  );

  return (
    <div className="flex items-center gap-2">
      <span
        className="w-10 h-10  rounded-[50%] flex justify-center items-center bg-yellow-400 cursor-pointer"
        // onClick={() => setCounter((num) => (num > 1 ? num - 1 : num))}
        onClick={() => dispatch(decreasePizzaQuantity(id))}
      >
        -
      </span>
      {quantity}
      <span
        className="w-10 h-10  rounded-[50%] flex justify-center items-center bg-yellow-400 cursor-pointer"
        // onClick={() => setCounter((num) => num + 1)}
        onClick={() => dispatch(increasePizzaQuantity(id))}
      >
        +
      </span>
    </div>
  );
}

export default QuantitySelector;
