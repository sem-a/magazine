import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function CardCart() {
  return (
    <div className="card__cart">
      <div className="card__cart-wrapper">
        <div className="card__cart-flex">
          <div className="card__cart-img">
            <img src={require('../img/no-image.jpg')} alt="no-image" />
          </div>
          <div className="card__cart-info">
            <div className="info__title">
              <p>Какой-то товар</p>
            </div>
            <div className="info__description">
              <p>
                Какой-то товар, который не пользуется спросом, не продается и не приносит прибыль.
                Но мы не можем просто так его выкинуть. Ведь он лежит мертвым грузом и занимает
                место. Это не только может привести к порче товара, но и создать пожароопасную
                ситуацию в магазине. Для того чтобы избавиться от ненужного товара, существует два
                способа: сдать его на утилизацию или продать его. Если вы решили продать, то учтите,
                что вам придется заплатить налог с дохода от продажи. Как это сделать? Содержание:
                Сдать на утилизация
              </p>
            </div>
          </div>
          <div className="card__cart-count">
            <div className="count"></div>
          </div>
          <div className="card__cart-button">
            <button className="button">КУПИТЬ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCart;