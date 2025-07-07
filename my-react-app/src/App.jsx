import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FoodDisplay from './pages/FoodDisplay.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

import Navbar from './components/Navbar';


function App() {
  return (
    <CartProvider> {/* <--- WRAP YOUR APP CONTENT HERE */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FoodDisplay" element={<FoodDisplay />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
