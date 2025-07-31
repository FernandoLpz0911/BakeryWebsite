import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* New div for left-aligned links */}
        <div className="nav-left-group">
          <Link to ="/" className="nav-link">HOME</Link>
          <Link to="/FoodDisplay" className="nav-link">BAKED GOODS</Link>
        </div>

        {/* The logo/site name, now centered */}
        <Link to="/" className="bakery-logo">Dulce Tentaciones</Link>

        {/* Existing div for right-aligned links (About Us, Contact) */}
        <div className="nav-right-group"> {/* Renamed from navbar-right-group */}
            <Link to="/About" className="nav-link">ABOUT US</Link>
            <Link to="/Contact" className="nav-link">CONTACT</Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;