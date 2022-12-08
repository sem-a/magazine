import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Cart from './page/Cart';
import Account from './page/Account';
import FavouritePage from './page/FavouritePage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
