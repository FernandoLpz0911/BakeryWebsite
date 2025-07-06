import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './contexts/CartContext';

import Home from './pages/Home';
import OrderPage from './pages/OrderPage';
import CookiesAndGifts from './pages/CookiesAndGifts.jsx';
import About from './pages/About.jsx';
import Checkout from './pages/Checkout.jsx';

function App() {
  return (
    <CartProvider> {/* <--- WRAP YOUR APP CONTENT HERE */}
        {/*
          Your Navbar (if it's a separate component) would typically go here,
          so it can also access the cart context for the item count.
          For now, your navbar is embedded directly in OrderPage.jsx, Home.jsx, About.jsx etc.
        */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/CookiesAndGifts" element={<CookiesAndGifts />} />
        <Route path="/About" element={<About />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
