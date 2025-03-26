import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addPizza(state, action) {
      state.cart.push(action.payload);
    },
    deletePizza(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload
      );
    },
    increasePizzaQuantity(state, action) {
      const pizza = state.cart.find((p) => p.pizzaId === action.payload);
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decreasePizzaQuantity(state, action) {
      const pizza = state.cart.find((p) => p.pizzaId === action.payload);
      if (pizza.quantity === 1) return;
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    clearCart(state) {
      console.log(true);
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addPizza } = cartSlice.actions;
export const { deletePizza } = cartSlice.actions;
export const { increasePizzaQuantity } = cartSlice.actions;
export const { decreasePizzaQuantity } = cartSlice.actions;
export const { clearCart } = cartSlice.actions;

//
//

export const getCart = (store) => store.cart.cart;
export const getTotalQuantity = (store) =>
  store.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);

export const getTotalPrice = (store) =>
  store.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
