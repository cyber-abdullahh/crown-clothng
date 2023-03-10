import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.scss';
import App from './App';
import { UserProvider } from './context/User.context';
import { ProductProvider } from './context/Products.context';
import { CartProvider } from './context/cart.context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>

  </React.StrictMode>
);

