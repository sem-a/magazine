import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Header() {

  return (
    <div className="header">
      <div className="container">
        <div className="header__flex">
          <div className="header__logotype">
            <h1 className="logo">GoodTrip</h1>
          </div>
          <div className="header__icon-flex">
            <div className="header__account">
              <Link to="/account">
                <div className="header__icon">
                  <FontAwesomeIcon icon={regular('user-circle')} />
                </div>
              </Link>
            </div>
            <div className="header__favourite">
              <Link to="/">
                <div className="header__icon">
                  <FontAwesomeIcon icon={regular('heart')} />
                </div>
              </Link>
            </div>
            <div className="header__card">
              <Link to="/cart">
                <div className="header__icon">
                  <FontAwesomeIcon icon={solid('cart-shopping')} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
