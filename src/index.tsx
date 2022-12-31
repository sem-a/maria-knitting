import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import App from './App';
import Cart from './page/Cart';
import Catalog from './page/Catalog';
import Account from './page/Accout';
import store from './store/store';
import { Provider, useDispatch } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/profile" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
);
