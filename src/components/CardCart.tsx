import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

interface Product {
  id: number;
  nameProduct: string;
  description: string;
  price: string;
  image: object;
}

function CardCart(props: Product) {

  const deleteCart = async() => {
    await fetch(`http://localhost:3001/cart/delete?productId=${props.id}`);
  }

  return (
    <div className="card__cart">
      <div className="card__cart-wrapper">
        <div className="card__cart-flex">
          <div className="card__cart-img">
            <img src={require('../img/no-image.jpg')} alt="no-image" />
          </div>
          <div className="card__cart-info">
            <div className="info__title">
              <p>{props.nameProduct}</p>
            </div>
            <div className="info__description">
              <p>{props.description}</p>
              <div className="info__price">
                <p>{props.price} руб.</p>
              </div>
            </div>
          </div>
          <div className="card__cart-count">
            <div className="count"></div>
          </div>
          <div className="card__cart-button">
            <button className="button">КУПИТЬ</button>
          </div>
          <div className="card__cart-delete" onClick={deleteCart}>
            <p>Удалить</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardCartList() {
  const [products, setProducts] = useState([]);

  const getCart = async () => {
    const cartIdDate = localStorage.getItem('user');
    if (cartIdDate) {
      const cartId = JSON.parse(cartIdDate).id;
      const cartUserData = await fetch(`http://localhost:3001/cart/get?id_cart=${cartId}`);
      const cartUser = await cartUserData.json();
      setProducts(cartUser['values']);
    } else {
      console.log('ошибка чтения корзины');
    }
  };

  useEffect(() => {
    getCart();
  });

  if (products != (null || undefined)) {
    const productsCartList = products.map((product: any) => {
      return (
        <CardCart
          key={product.id_product}
          id={product.id_product}
          nameProduct={product.name_product}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      );
    });
    return <div>{productsCartList}</div>;
  } else {
    return <div>Здесь ничего нет</div>;
  }
}

export default CardCartList;
