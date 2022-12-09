import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Card() {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__image">
          <img src={require('../img/no-image.jpg')} alt="какая-то картинка" />
        </div>
        <div className="card__content">
          <div className="card__content-flex">
            <div className="card__price">5000 руб.</div>
            <div className="card__art">Арт: 552358</div>
          </div>
          <div className="card__title">
            <h3>Какой-то товар</h3>
          </div>
          <div className="card__button">
            <div className="button">В КОРЗИНУ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
