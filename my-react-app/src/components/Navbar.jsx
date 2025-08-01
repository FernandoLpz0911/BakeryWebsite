import { Link } from 'react-router-dom';

import './cssfiles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-left-group">
          <Link to ="/" className="nav-link">HOME</Link>
          <Link to="/FoodDisplay" className="nav-link">BAKED GOODS</Link>
        </div>

        <Link to="/">
          <img src="/BakeryWebsite/images/BakeryLogo.jpg" alt="Dulce Tentaciones Bakery Logo" className="bakery-image" />
        </Link>

        <div className="nav-right-group"> 
            <Link to="/About" className="nav-link">ABOUT US</Link>
            <Link to="/Contact" className="nav-link">CONTACT</Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;