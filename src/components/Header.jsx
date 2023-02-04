import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
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
          <i className="fas fa-shopping-basket" />
        </Link>
        {context.state.cart.length > 0 && <div className="Header-alert">{context.state.cart.length}</div>}
      </div>
    </div>
  );
};

export { Header };
