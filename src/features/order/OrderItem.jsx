import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="border-y py-2 border-stone-200  ">
      <div className="flex justify-between">
        <div>
          <p className="text-sm">
            <span>{quantity}&times;</span> {name}
          </p>
          <p></p>
        </div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
