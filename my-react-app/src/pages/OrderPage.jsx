import React from 'react';

// Main App component
const App = () => {
  return (
    <>

      {/* The main container for the entire application, setting min height, font, and background color */}
      <div className="min-h-screen" style={{ backgroundColor: '#f7f3ed' }}>
        {/* Top Bar: Displays a promo message */}
        <div className="top-bar">
          
        </div>

        {/* Nav Bar */}
        <nav className="navbar">
          <div className="navbar-container">

            {/* Nav Links */}
            <div className="nav-links">
              <a href="#" className="nav-link">COOKIES & GIFTS</a>
              <a href="#" className="nav-link">ORDER</a>
              <a href="#" className="nav-link">BAKERIES</a>
              <a href="#" className="nav-link">ABOUT</a>
            </div>

            {/* Bakery Logo */}
            <div className="bakery-logo">Dulce Tentaciones</div>

            {/* NavBar Icons: User and Shopping Bag */}
            <div className="navbar-icons">

              {/* User Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>

              {/* Shopping Bag Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>

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
              New Temp 1 <br/>New Temp 2 <br/><span>New Temp 3</span>
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
