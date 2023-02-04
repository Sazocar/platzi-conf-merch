import React from 'react';
import { Products } from '../components/Products';
import { useAppContext } from '../context/AppContext';
import initialState from '../initialState';

const Home = () => {
  const context = useAppContext();
  const { products } = context.state

  return (
    <Products products={products} />
  )
}
export { Home };