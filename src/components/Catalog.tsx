import React from 'react';
import Card from './Card';

function Catalog() {
  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__title">
          <h2 className="title">Каталог</h2>
        </div>
        <div className="catalog__container">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
