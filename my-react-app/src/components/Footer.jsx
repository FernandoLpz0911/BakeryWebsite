import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <nav className="footer">
      <div className="footer-container">
        <Link to="/" className="bakery-logo">Dulce Tentaciones</Link>
      
        <div className="footer-right-group">
          <div className="footer-links">
            <Link to="/FoodDisplay" className="nav-link">BAKED GOODS</Link>
            <Link to="/About" className="nav-link">ABOUT US</Link>
            <Link to="/Contact" className="nav-link">CONTACT</Link>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Footer;
