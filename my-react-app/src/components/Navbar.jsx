import { useState } from 'react';
import { Link } from 'react-router-dom';
import './cssfiles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="bakery-logo">
          <img src="/images/BakeryLogo.jpg" alt="Dulce Tentaciones Bakery Logo" className="bakery-image" />
        </Link>
        
        {/* Hamburger menu button for mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          <div className="nav-left-group">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/FoodDisplay" className="nav-link">BAKED GOODS</Link>
          </div>
          <div className="nav-right-group">
            <Link to="/About" className="nav-link">ABOUT US</Link>
            <Link to="/Contact" className="nav-link">CONTACT</Link>
          </div>
        </div>

        {/* Mobile menu, conditionally rendered */}
        <div className={`mobile-nav-links ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/FoodDisplay" className="nav-link">BAKED GOODS</Link>
          <Link to="/About" className="nav-link">ABOUT US</Link>
          <Link to="/Contact" className="nav-link">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;