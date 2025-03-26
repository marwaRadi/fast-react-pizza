import { useSelector } from "react-redux";
import { Link, useActionData } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);

  // const pizzaQuantity = pizzas.reduce((acc, curr) => curr.quantity + acc, 0);
  // const pizzaPrice = pizzas.reduce((acc, curr) => curr.unitPrice + acc, 0);
  // console.log(pizzaPrice);
  if (!totalQuantity) return null;
  return (
    <div className="bg-stone-800 text-stone-300 flex justify-between p-4 font-semibold uppercase text-sm fixed bottom-0 left-0 right-0">
      <p className="space-x-4">
        <span>{totalQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link className="" to="/cart">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
