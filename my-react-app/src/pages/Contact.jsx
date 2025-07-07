
// Main App component
const Contact = () => {

  return (
    <>
      {/* Home Page*/}
      <div className="min-h-screen" style={{ backgroundColor: '#f7f3ed' }}>
        
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

export default Contact;
