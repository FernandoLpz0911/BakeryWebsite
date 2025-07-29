import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="bakery-logo">Dulce Tentaciones</Link>
      
        <div className="navbar-right-group">
          <div className="nav-links">
            <Link to="/FoodDisplay" className="nav-link">BAKED GOODS</Link>
            <Link to="/About" className="nav-link">ABOUT US</Link>
            <Link to="/Contact" className="nav-link">CONTACT</Link>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
