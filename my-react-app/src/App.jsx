import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OrderPage from './pages/OrderPage';
import CookiesAndGifts from './pages/CookiesAndGifts.jsx';
import About from './pages/About.jsx';
import Checkout from './pages/Checkout.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/OrderPage" element={<OrderPage />} />
      <Route path="/CookiesAndGifts" element={<CookiesAndGifts />} />
      <Route path="/About" element={<About />} />
      <Route path="/Checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
