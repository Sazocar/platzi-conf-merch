import React from 'react';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import '../styles/components/Checkout.css';
import { useAppContext } from '../context/AppContext';
import { Product } from '../components/Product';

const Checkout = () => {
  const context = useAppContext();
  const { removeFromCart } = context;
  const { cart } = context.state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">

        {cart.lenght > 0 ? <h3>Lista de Pedidos:</h3> : <h3>No hay pedidos</h3>}

        {cart.map((product) => (
          <div className="Checkout-item" key={product.id}>
            <div className="Checkout-element">
              <h4>{product.title}</h4>
              <span>$ {product.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(product)}>
              <BsTrash title="Eliminar" size="1.5rem" />
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export { Checkout };
