import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { BsFillBasket2Fill } from 'react-icons/bs';
import '../styles/components/Header.css';


const Header = () => {
  const context = useAppContext();

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <BsFillBasket2Fill title="Checkout" size="1.5rem" />
        </Link>
        {context.state.cart.length > 0 && (
          <div className="Header-alert">{context.state.cart.length}</div>
        )}
      </div>
    </div>
  );
};

export { Header };
