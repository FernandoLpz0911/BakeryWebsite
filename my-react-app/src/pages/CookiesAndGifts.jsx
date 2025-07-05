import { Link } from 'react-router-dom';

// Main App component
const App = () => {

  return (
    <>
      {/* Home Page*/}
      <div className="min-h-screen" style={{ backgroundColor: '#f7f3ed' }}>
        {/* Top Bar: Displays a promo message */}
        <div className="top-bar">
          Cookies and Gifts Page
        </div>

        {/* Nav Bar */}
        <nav className="navbar">
          <div className="navbar-container">

            {/* Nav Links */}
            <div className="nav-links">
              <Link to="/CookiesAndGifts" className="nav-link">COOKIES & GIFTS</Link>
              <Link to="/OrderPage" className="nav-link">ORDER</Link>
              <Link to="/About" className="nav-link">ABOUT</Link>
            </div>

            {/* Bakery Logo */}
            <Link to="/" className="bakery-logo">Dulce Tentaciones</Link>

            {/* NavBar Icons: User and Shopping Bag */}
            <div className="navbar-icons">

              {/* User Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>

              {/* Shopping Bag Icon */}
              <Link to="/Checkout">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
              </Link>

            </div>
          </div>
        </nav>

        {/* Food Section: A prominent section with a light blue background, containing an image and text */}
        <div className="hero-section">
          {/* Left Section, image and text tag */}
          <div className="hero-image-container">

            {/* text tag */}
            <div className="summer-tag">
              <p>Here<br/>All Year<br/>Around!</p>
            </div>

            {/* Main Cookie Image Placeholder */}
            <img src="./FoodImage1.jpg" alt="Delicious Cookies" className="main-cookie-image" />
          </div>

          {/* Right Section, Text and Button */}
          <div className="hero-text-content">

            <h1 className="headline">
              Temp 1 <br/>Temp 2 <br/><span>Temp 3</span>
            </h1>

            <p className="description">
              Temp Placeholder
            </p>

            {/* Shop All Sweets Button */}
            <a href="#" className="shop-button">SHOP ALL SWEETS</a>

          </div>
        </div>

        {/* Footer can be added here if needed */}
      </div>
    </>
  );
};

export default App;
