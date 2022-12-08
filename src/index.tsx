import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Cart from './page/Cart';
import Account from './page/Account';
import FavouritePage from './page/FavouritePage';
import ProductPage from './page/ProductPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account" element={<Account />} /> {/* :userid */}
        <Route path="/cart" element={<Cart />} /> {/* :userid */}
        <Route path="/favourite" element={<FavouritePage />} /> {/* :userid */}
        <Route path="/product" element={<ProductPage />} /> {/* :productid */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
