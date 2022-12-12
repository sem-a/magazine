import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CardCartList from '../components/CardCart';
import Header from '../components/Header';

function Cart() {

  const location = useLocation();

  return (
    <div>
      <Header />
      <div className="cart">
        <div className="container">
        <Link to="/">
            <div className="link__home">
              <p>На главную</p>
            </div>
          </Link>
          <div className="cart__title">
            <h2 className="title">Корзина</h2>
          </div>
          <div className="cart__catalog">
            <CardCartList products={location.state.productsCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
