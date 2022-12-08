import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function ProductPage() {
  return (
    <div>
      <Header />
      <div className="product">
        <div className="container">
          <div className="product__title">
            <h2 className="title">Какой-то товар</h2>
          </div>
          <Link to="/">
            <div className="link__home">
              <p>На главную</p>
            </div>
          </Link>
          <div className="product__items">
            <div className="product__item-img">
              <img src={require('../img/no-image.jpg')} alt="product img" />
            </div>
            <div className="product__item-description">
              <div className="product__description">
                <p>
                  Какой-то товар, который не пользуется спросом, не продается и не приносит прибыль.
                  Но мы не можем просто так его выкинуть. Ведь он лежит мертвым грузом и занимает
                  место. Это не только может привести к порче товара, но и создать пожароопасную
                  ситуацию в магазине. Для того чтобы избавиться от ненужного товара, существует два
                  способа: сдать его на утилизацию или продать его. Если вы решили продать, то
                  учтите, что вам придется заплатить налог с дохода от продажи. Как это сделать?
                  Содержание: Сдать на утилизация
                </p>
              </div>
              <div className="product__price">
                <p>5000 руб.</p>
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
