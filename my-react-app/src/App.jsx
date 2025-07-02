import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OrderPage from './pages/OrderPage'; // Imports the Ordering Page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/OrderPage" element={<OrderPage />} />
    </Routes>
  );
}

export default App;
