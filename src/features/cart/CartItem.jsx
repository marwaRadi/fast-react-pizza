import { useDispatch } from "react-redux";
import { Button } from "../../components/buttons";
import QuantitySelector from "../../components/QuantitySelector";
import { formatCurrency } from "../../utils/helpers";
import { deletePizza } from "./cartSlice";

function CartItem({ pizza }) {
  const { pizzaId: id, name, quantity, totalPrice } = pizza;
  console.log(id)
const dispatch = useDispatch()
  return (
    <li className="flex justify-between items-center">
      <p>{quantity }× {name }</p>
      <div className="flex gap-2.5 items-center">
        <p className="font-semibold">{ totalPrice}</p>
        <QuantitySelector id={id} key={id}/>
        <Button onClick={()=>dispatch(deletePizza(id)) } fontSize="sm">delete</Button>
      </div>
      {/* <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div> */}
    </li>
  );
}

export default CartItem;
