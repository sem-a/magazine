import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import User from '../components/User';
import Auth from '../components/Auth';

function Account() {
  return (
    <div>
      <Header />
      <div className="account">
        <div className="container">
          <div className="personal__date">
            <Link to="/">
              <div className="link__home">
                <p>На главную</p>
              </div>
            </Link>
            <Auth />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
