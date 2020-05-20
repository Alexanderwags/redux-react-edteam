import { ADD_TO_CART, DELETE_TO_CART } from "./actions";

const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});
const delToCart = (id) => ({
  type: DELETE_TO_CART,
  id,
});

export { addToCart, delToCart };
