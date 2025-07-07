import React from 'react';
import { Link } from 'react-router-dom';

// This is your product data. Ensure these image paths lead to your actual images in public/images/
const products = [
  { id: 1, name: "Heartfelt Cakes", description: "Sweet gestures for every celebration, baked with joy.", price: "4.50", imageUrl: "/images/HeartCakes.jpg" },
  { id: 2, name: "Cozy Conchas", description: "Traditional comfort, fluffy texture, perfect with coffee.", price: "5.00", imageUrl: "/images/Conchas.jpg" },
  { id: 3, name: "Joyful Cupcakes", description: "Little bursts of happiness for every sweet craving.", price: "3.75", imageUrl: "/images/Cupcakes.jpg" },
  { id: 4, name: "Assorted Cookies", description: "A classic collection for everyday indulgence.", price: "7.00", imageUrl: "/images/placeholder-cookies.jpg" }, // Use your own image for this
];


const FoodDisplay = () => {
  return (
    <>
      {/* The main container for the order page, using the theme-consistent class */}
      {/* The background color is controlled by .order-page-container in CheckoutFormStyles.css */}
      <div className="order-page-container">

        {/* Main Content Area for Products */}
        <main className="order-main-content">
          <div className="content-wrapper"> {/* Reusing content-wrapper for max-width/centering */}
            {/* Page Header for the Order Page */}
            {/* Changed heading to better reflect showcase purpose */}
            <h1 className="order-page-header">Explore Our Baked Goods</h1>

            {/* Grid to display all product cards */}
            <div className="product-grid-order-page">

            {/* Maps over each product to create a card */}
            {products.map(product => (

              <div key={product.id} className="product-card-order-page">

                {/* Product Image */}
                <img src={product.imageUrl} alt={product.name} className="product-image-order-page" />

                {/* Product Name */}
                <h3 className="product-name-order-page">{product.name}</h3>

                {/* Product Description */}
                <p className="product-description-order-page">{product.description}</p>

                {/* Product Price (still shown for information) */}
                <div className="product-price-order-page">${product.price}</div>
              </div>
            ))}
          </div> {/* END product-grid-order-page */}

            {/* Back Button / Continue Shopping */}
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                {/* Changed text to reflect it's a showcase page */}
                <Link to="/" className="back-button">Back to Home</Link>
            </div>

          </div> {/* END content-wrapper */}
        </main> {/* END order-main-content */}

        {/* Footer can be added here if needed */}
      </div> {/* END order-page-container */}
    </>
  );
};

export default FoodDisplay;