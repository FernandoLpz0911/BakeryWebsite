// src/pages/OrderPage.jsx
import React, { useState, useContext, useEffect } from 'react'; // <--- THESE IMPORTS ARE CRUCIAL
import { Link } from 'react-router-dom';

// REMOVE THIS LINE IF IT EXISTS: import './cssFiles/OrderPage.css'; // This file should be deleted now

import { CartContext } from '../contexts/CartContext'; // <--- THIS IMPORT IS CRITICAL FOR CART FUNCTIONALITY

// This is your product data. Ensure these image paths lead to your actual images in public/images/
const products = [
  { id: 1, name: "Heartfelt Cakes", description: "Sweet gestures for every celebration, baked with joy.", price: "4.50", imageUrl: "/images/image_b0fce2.jpg" },
  { id: 2, name: "Cozy Conchas", description: "Traditional comfort, fluffy texture, perfect with coffee.", price: "5.00", imageUrl: "/images/image_b0fa1c.jpg" },
  { id: 3, name: "Joyful Cupcakes", description: "Little bursts of happiness for every sweet craving.", price: "3.75", imageUrl: "/images/image_b0fcc2.jpg" },
  { id: 4, name: "Assorted Cookies", description: "A classic collection for everyday indulgence.", price: "7.00", imageUrl: "/images/placeholder-cookies.jpg" }, // Use your own image for this
];


const OrderPage = () => {
  // Use the CartContext to access global cart functions and state
  const { addToCart, getTotalItems } = useContext(CartContext); // <--- THIS HOOK IS CRITICAL

  // Local state to manage the quantity selected for each product
  const [quantities, setQuantities] = useState({}); // <--- THIS STATE IS CRITICAL

  // Initialize quantities for all products when the component mounts
  useEffect(() => { // <--- THIS EFFECT IS CRITICAL
    const initialQuantities = {};
    products.forEach(product => {
      initialQuantities[product.id] = 1; // Default quantity for each product is 1
    });
    setQuantities(initialQuantities);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Handler for changing quantity for a specific product
  const handleQuantityChange = (productId, delta) => { // <--- THIS FUNCTION IS CRITICAL
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max(1, (prevQuantities[productId] || 0) + delta) // Quantity must be at least 1
    }));
  };

  // Handler for adding a product to the cart
  const handleAddToCart = (product) => { // <--- THIS FUNCTION IS CRITICAL
    const quantityToAdd = quantities[product.id] || 1;
    addToCart(product, quantityToAdd);
    
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [product.id]: 1
    }));
    
    alert(`${quantityToAdd} x ${product.name} added to cart! Total items: ${getTotalItems() + quantityToAdd}`); 
  };

  return (
    <>
      {/* The main container for the order page, using the theme-consistent class */}
      {/* The background color is controlled by .order-page-container in CheckoutFormStyles.css */}
      <div className="order-page-container">

        {/* Top Bar: Displays a promo message (consistent across pages) */}
        <div className="top-bar">
          Baked Fresh Daily &bull; Delivered to Your Door
        </div>

        {/* Nav Bar (consistent across pages) */}
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

              {/* Shopping Bag Icon - Now displays the total number of items in cart */}
              <Link to="/Checkout" style={{ position: 'relative' }}> {/* style added for item count positioning */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                {/* Display total items in cart using the context */}
                <span className="cart-item-count">{getTotalItems()}</span> 
              </Link>

            </div>
          </div>
        </nav>

        {/* Main Content Area for Products */}
        <main className="order-main-content">
          <div className="content-wrapper"> {/* Reusing content-wrapper for max-width/centering */}
            {/* Page Header for the Order Page */}
            <h1 className="order-page-header">Our Delicious Treats</h1>

            {/* Grid to display all product cards */}
            <div className="product-grid-order-page"> {/* <--- CLASS NAME CHANGED HERE */}

            {/* Maps over each product to create a card */}
            {products.map(product => (

              <div key={product.id} className="product-card-order-page"> {/* <--- CLASS NAME CHANGED HERE */}

                {/* Product Image */}
                <img src={product.imageUrl} alt={product.name} className="product-image-order-page" /> {/* <--- CLASS NAME CHANGED HERE */}

                {/* Product Name */}
                <h3 className="product-name-order-page">{product.name}</h3> {/* <--- CLASS NAME CHANGED HERE */}

                {/* Product Description */}
                <p className="product-description-order-page">{product.description}</p> {/* <--- CLASS NAME CHANGED HERE */}

                {/* Product Price */}
                <div className="product-price-order-page">${product.price}</div> {/* <--- CLASS NAME CHANGED HERE */}

                {/* Quantity Control (plus/minus buttons) */}
                <div className="quantity-control-order-page"> {/* <--- CLASS NAME CHANGED HERE */}
                  <button onClick={() => handleQuantityChange(product.id, -1)}>-</button> {/* <--- onClick handler */}
                  {/* Display current quantity for this product */}
                  <span>{quantities[product.id]}</span> {/* <--- DYNAMIC QUANTITY */}
                  <button onClick={() => handleQuantityChange(product.id, 1)}>+</button> {/* <--- onClick handler */}
                </div>

                {/* Add to Cart Button */}
                <button
                  className="add-to-cart-button-order-page"
                  onClick={() => handleAddToCart(product)} // <--- onClick handler
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div> {/* END product-grid-order-page */}

            {/* Back Button / Continue Shopping */}
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to="/" className="back-button">Continue Shopping</Link>
            </div>

          </div> {/* END content-wrapper */}
        </main> {/* END order-main-content */}

        {/* Footer can be added here if needed */}
      </div> {/* END order-page-container */}
    </>
  );
};

export default OrderPage;