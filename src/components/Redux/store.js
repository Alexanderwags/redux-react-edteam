import { createStore } from "redux";
import { ADD_TO_CART } from "./actions";

const initialStore = {
  cart: [],
};
const rootReducer = (state = initialStore, action) => {
  if (action.type === ADD_TO_CART) {
    return {
      ...state,
      cart: state.cart.concat(action.id),
    };
  }
  // console.log("action :", action);
  return state;
};

export default createStore(rootReducer);
