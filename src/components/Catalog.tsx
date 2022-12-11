import React, {useState, useEffect} from 'react';
import CardList from './Card';

function Catalog() {
  
  const [products, setProducts] = useState<Array<Object>>([])

  const getProduct = async() => {
    const dataProducts = await fetch('http://localhost:3001/api/product')
    const products = await dataProducts.json();
    setProducts(products);
  }

  useEffect( () => {
    getProduct();
  }, []);

  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__title">
          <h2 className="title">Каталог</h2>
        </div>
        <div className="catalog__container">
          <CardList products={products} />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
