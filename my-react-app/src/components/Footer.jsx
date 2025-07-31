import { Link } from 'react-router-dom';
import './cssfiles/footer.css';

import Contact from "../components/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // get year as we update the footer

  return (
    <nav className="footer">
      <div className="footer-container">
        <Link to="/" className="bakery-logo">Dulce Tentaciones</Link>

        <div className="footer-right-group">
          <div className="footer-links">
            <Link to="/PrivacyPolicy" className="nav-link">PRIVACY POLICY</Link>
          </div>
        </div>
      </div>
      <section className="newsletter-cta-section">
        <Contact />
      </section>
      
      <div className="footer-bottom">
        <p className="copyright-text">© {currentYear} Dulce Tentaciones. All rights reserved.</p>
      </div>
    </nav>
  );
};

export default Footer;