import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Header() {
  return(
    <div className='header'>
      <div className="container">
        <div className="header__flex">
          <div className="header__logotype">
            <h1 className="logo">GoodTrip</h1>
          </div>
          <div className="header__icon-flex">
            <div className="header__favourite">
              <div className="header__icon">
                <FontAwesomeIcon icon={regular('heart')} />
              </div>
            </div>
            <div className="header__card">
              <div className="header__icon">
                <FontAwesomeIcon icon={solid('cart-shopping')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;