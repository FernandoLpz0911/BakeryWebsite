import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LEFT: Bakery Logo */}
        <Link to="/" className="bakery-logo">Dulce Tentaciones</Link>
        
        {/* RIGHT GROUP: Contains Nav Links and Icons */}
        {/* THIS IS THE CRUCIAL CHANGE FOR ALIGNMENT */}
        <div className="navbar-right-group">
          {/* Nav Links */}
          <div className="nav-links">
            <Link to="/FoodDisplay" className="nav-link">BAKED GOODS</Link>
            <Link to="/About" className="nav-link">ABOUT US</Link>
            <Link to="/Contact" className="nav-link">CONTACT</Link>
          </div>
        </div> {/* END navbar-right-group */}
      </div>
    </nav>
  );
};

export default Navbar;
