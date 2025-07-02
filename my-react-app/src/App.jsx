import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OrderPage from './pages/OrderPage';
import CookiesAndGifts from './pages/CookiesAndGifts.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/OrderPage" element={<OrderPage />} />
      <Route path="/CookiesAndGifts" element={<CookiesAndGifts />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default App;
