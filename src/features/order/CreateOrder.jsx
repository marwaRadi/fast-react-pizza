// import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { OrderInput } from "../../components/Input";
import { Button } from "../../components/buttons";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../cart/cartSlice";
import store from "../../Store";
import { fetchAddress, getUser } from "../user/userSlice";
import EmptyCart from "../cart/EmptyCart";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

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

function CreateOrder() {
  // hooks
  const navigation = useNavigation();
  const errors = useActionData();
  const dispatch = useDispatch();
  // const userAddress = useSelector(getUserAddress);
  const {
    userName: activeUser,
    address: userAddress,
    // position: userPosition,
    status: addressStatus,
  } = useSelector(getUser);
  // const [withPriority, setWithPriority] = useState(false);

  // checking
  const isSubmitting = navigation.state === "submitting";
  const isLoadingAddress = addressStatus === "loading";
  const cart = useSelector(getCart);
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold ">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className="flex justify-between items-center mb-4 ">
          <label className=" w-1/4">First Name</label>
          <OrderInput name="customer" value={activeUser} />
          {/* <input type="text" name="customer" required /> */}
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="w-1/4">Phone number</label>
          <div className="w-3/4">
            <OrderInput type="tel" width="full" name="phone" />
            {/* <input type="tel" name="phone" required /> */}
            {errors && errors}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <label className="w-1/4">Address</label>
          <div className="w-3/4 relative ">
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <OrderInput
              disabled={isLoadingAddress}
              width="full"
              value={userAddress}
              name="address"
              placeholder={isLoadingAddress ? "loading address...." : ""}
            />
            {!userAddress && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                className="text-sm font-semibold absolute top-[6.5%] right-[3px] bg-yellow-400 rounded-full p-2.5 md:p-2  cursor-pointer uppercase hover:bg-yellow-300 focus:ring-yellow-300  border-stone-50 border-2 focus:ring-4 "
              >
                get position
              </button>
            )}

            {/* <input type="text" name="address" required /> */}
          </div>
        </div>

        <div className="flex mb-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="accent-amber-400 me-3 w-6 h-6  "
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div className="mt-10">
          <Button isSubmitting={isSubmitting}>
            {isSubmitting ? "Loading" : "order now for $"}
          </Button>
          {/* <button disabled={isSubmitting}>
            {isSubmitting ? "loading..." : "Order now"}
          </button> */}
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
export async function action({ request }) {
  // get data inputs data
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const orderData = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const errors = {};
  if (!isValidPhone(orderData.phone))
    return (errors.phone =
      "Please give us your correct number. we might need it to contact you");
  if (Object.keys(errors).length > 0) return errors;
  // clear cart
  store.dispatch(clearCart());
  const createNewOrder = await createOrder(orderData);
  return redirect(`/order/${createNewOrder.id}`);
}
