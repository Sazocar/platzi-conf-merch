import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">Platzi Conf Merch</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FaShoppingCart title="Checkout" size="2rem" />
        </Link>
      </div>
    </div>
  );
}
export { Header };