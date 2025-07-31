import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import FoodDisplay from './pages/FoodDisplay.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';

import './pages/cssFiles/global.css';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FoodDisplay" element={<FoodDisplay />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
