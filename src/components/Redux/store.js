import { createStore } from "redux";
import { ADD_TO_CART, DELETE_TO_CART } from "./actions";

const initialStore = {
  cart: [],
};
const rootReducer = (state = initialStore, action) => {
  console.log(action.type);
  if (action.type === ADD_TO_CART) {
    if (state.cart.find((a) => a === action.id)) return state;
    return {
      ...state,
      cart: state.cart.concat(action.id),
    };
  } else if (action.type === DELETE_TO_CART) {
    const cartId = action.id;
    return state.filter((inf) => inf.id !== cartId);
  }
  // console.log("action :", action);
  return state;
};

export default createStore(rootReducer);
