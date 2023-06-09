import React, { useContext } from 'react';
import {Product} from './Product';
import { useAppContext } from '../context/AppContext';
import '../styles/components/Products.css';

const Products = () => {
  const context = useAppContext();
  const { products } = context.state;

  const handleAddToCart = (product) => () => {
    context.addToCart(product);
  };

  return (
    <div className="Products"> 
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export { Products };
