import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  nameProduct: string;
  description: string;
  price: string;
  image: object;
}

function Card(props: Product) {
  const key = props.id;
  return (
    <div className="card">
      <div className="card__wrapper">
        <Link
          to={'/product/' + key}
          state={{
            key: props.id,
            id: props.id,
            nameProduct: props.nameProduct,
            description: props.description,
            price: props.price,
            image: props.image,
          }}
        >
          <div className="card__image">
            <img src={require('../img/no-image.jpg')} alt="какая-то картинка" />
          </div>
          <div className="card__content">
            <div className="card__content-flex">
              <div className="card__price">{props.price} руб.</div>
              <div className="card__art">Арт: {props.id}</div>
            </div>
            <div className="card__title">
              <h3>{props.nameProduct}</h3>
            </div>
          </div>
        </Link>
        <div className="card__button">
          <div className="button">В КОРЗИНУ</div>
        </div>
      </div>
    </div>
  );
}

function CardList(props: any) {
  const productsList = props.products.map((product: any) => {
    return (
      <Card
        key = {product.id}
        id={product.id}
        nameProduct={product.name_product}
        description={product.description}
        price={product.price}
        image={product.image}
      />
    );
  });
  if (productsList.length != 0) {
    return <div className="catalog__grid">{productsList}</div>;
  } else {
    return <div>Здесь ничего нет</div>
  }
}

export default CardList;
