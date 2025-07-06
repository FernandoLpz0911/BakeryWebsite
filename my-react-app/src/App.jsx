import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './contexts/CartContext';

import Home from './pages/Home';
import OrderPage from './pages/OrderPage';
import CookiesAndGifts from './pages/CookiesAndGifts.jsx';
import About from './pages/About.jsx';
import Checkout from './pages/Checkout.jsx';
import Events from './pages/Events.jsx';

function App() {
  return (
    <CartProvider>
        {/* Nav Bar goes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/CookiesAndGifts" element={<CookiesAndGifts />} />
        <Route path="/About" element={<About />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
