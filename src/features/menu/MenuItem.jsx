// import { PrimaryBtn } from "../../components/buttons";
import { useState } from "react";
import { Button } from "../../components/buttons";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, deletePizza, getCart } from "../cart/cartSlice";
import QuantitySelector from "../../components/QuantitySelector";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const isAddToCart = cart.some((item) => item.pizzaId === id);
  function handleAddToCart() {
    // const pizza = await getOrder(id);
    // console.log(pizza);
    // console.log(id);
    const newOrder = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addPizza(newOrder));
  }
  function handleDeletePizza() {
    dispatch(deletePizza(id));
  }
  return (
    <li>
      <div className="py-2 flex gap-4">
        <img
          src={imageUrl}
          alt={name}
          className={`size-24 ${soldOut ? "grayscale opacity-75" : ""}`}
        />
        <div className="w-full">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500 capitalize  italic">
            {ingredients.join(", ")}
          </p>
          <div className="flex items-end justify-between mt-auto ">
            {!soldOut ? (
              <p>{formatCurrency(unitPrice)}</p>
            ) : (
              <p className="mt-5 font-medium text-stone-500 text-sm uppercase">
                Sold out
              </p>
            )}
            {!soldOut &&
              (isAddToCart ? (
                <div className="flex gap-3">
                  <QuantitySelector id={id} />
                  <Button onClick={handleDeletePizza} fontSize={"xs"}>
                    delete
                  </Button>
                </div>
              ) : (
                <Button onClick={handleAddToCart} fontSize="xs">
                  add to cart
                </Button>
              ))}
          </div>
        </div>
      </div>

      {/* <PrimaryBtn fontSize={12}>add to cart</PrimaryBtn> */}
    </li>
  );
}

export default MenuItem;
