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
        
          {/* NavBar Icons */}
          <div className="navbar-icons">
            {/* User Icon */}
            <Link to="/LoginPage">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div> {/* END navbar-right-group */}
      </div>
    </nav>
  );
};

export default Navbar;
