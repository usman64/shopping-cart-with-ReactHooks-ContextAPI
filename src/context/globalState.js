import React, { createContext, useReducer } from 'react';
import reducer from './reducer.js';

const initialState = {
  isCartHidden: true,
  cart: [],
  isSnackbarHidden: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  };
  const deleteItem = (id) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: id,
    });
  };
  const clearItem = (id) => {
    dispatch({
      type: 'CLEAR_ITEM',
      payload: id,
    });
  };

  const toggleCartHidden = () => {
    dispatch({
      type: 'TOGGLE_CART_HIDDEN',
    });
  };

  const toggleSnackbar = () => {
    dispatch({
      type: 'TOGGLE_SNACKBAR',
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        isCartHidden: state.isCartHidden,
        cart: state.cart,
        isSnackbarHidden: state.isSnackbarHidden,
        addItem,
        deleteItem,
        clearItem,
        toggleCartHidden,
        toggleSnackbar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
