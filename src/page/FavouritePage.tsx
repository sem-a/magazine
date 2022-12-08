import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';

function FavouritePage () {
  return(
    <div>
      <Header />
      <div className="favourite__page">
        <div className='container'>
          <div className="favourite__page-title">
            <h2 className='title'>Избранное</h2>
          </div>
          <Link to="/">
            <div className="link__home">
              <p>На главную</p>
            </div>
          </Link>
          <div className="catalog__container">
            <Card />
          </div>
        </div>
      </div>
    </div>   
  );
}

export default FavouritePage;