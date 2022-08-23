import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import '../styles/components/Layout.css';

const Layaout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export { Layaout };