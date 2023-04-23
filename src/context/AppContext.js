import React, { createContext, useContext, useState } from 'react';
import initialState from '../initialState';

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const context = {
    addToCart,
    removeFromCart,
    addToBuyer,
    state,
  };

  return(
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const appContext = useContext(AppContext);
  return appContext;
}

export { 
  AppProvider,
  useAppContext
 };
