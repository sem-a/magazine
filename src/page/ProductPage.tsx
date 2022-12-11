import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function ProductPage() {

  let location = useLocation();

  return (
    <div>
      <Header />
      <div className="product">
        <div className="container">
          <Link to="/">
            <div className="link__home">
              <p>На главную</p>
            </div>
          </Link>
          <div className="product__title">
            <h2 className="title">{location.state.nameProduct}</h2>
          </div>
          <div className="product__items">
            <div className="product__item-img">
              <img src={require('../img/no-image.jpg')} alt="product img" />
            </div>
            <div className="product__item-description">
              <div className="product__description">
                <p>
                  {location.state.description}
                </p>
              </div>
              <div className="product__price">
                <p>{location.state.price} руб. </p>
              </div>
              <div className="product__button">
                <button className="button">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
