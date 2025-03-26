import { Link } from "react-router-dom";
// import { PrimaryBtn, SecondaryBtn } from "../../components/buttons";
import { Button } from "../../components/buttons";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector(getCart);
  const activeUser = useSelector((store) => store.user.userName);
const dispatch = useDispatch()
  if (!cart.length > 0) return <EmptyCart />;
  return (
    <div className="p-3">
      <Link className="text-blue-500 text-sm" to="/menu">
        &larr; Back to menu
      </Link>

      <h2 className="my-7 font-semibold text-[18px]">
        Your cart, {activeUser}
      </h2>
      <ul className="mb-3 ">
        {cart.map((pizza) => (
          <CartItem pizza={pizza} key={pizza.pizzaId} />
        ))}
      </ul>

      <div className="border-t-1 border-stone-200 pt-4 flex gap-3 ">
        <Button fontSize="sm">
          <Link to="/order/new">Order pizzas</Link>
        </Button>
        <Button
          type="secondary"
          onClick={() => dispatch(clearCart())}
          fontSize="sm"
          color="stone"
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
