import { addToCart, removeItemFromCart } from './utils.js';

export default (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: addToCart(state.cart, action.payload),
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.payload),
      };
    case 'CLEAR_ITEM':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        isCartHidden: !state.isCartHidden,
      };
    default:
      return state;
  }
};
