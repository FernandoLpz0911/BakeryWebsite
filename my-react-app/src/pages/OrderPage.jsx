import React from 'react';
import { Link } from 'react-router-dom';
import './cssFiles/OrderPage.css';

// This is literally just a struct of all the products
const products = [
  { id: 1, name: "Pastry 1", description: "Description", price: "4.50", imageUrl: "https://placehold.co/150x150/FFDDC1/000000?text=Cookie1" },
  { id: 2, name: "Pastry 2", description: "Description", price: "5.00", imageUrl: "https://placehold.co/150x150/D2B48C/FFFFFF?text=Cookie2" },
  { id: 3, name: "Pastry 3", description: "Description", price: "3.75", imageUrl: "https://placehold.co/150x150/FFFACD/000000?text=Muffin1" },
  { id: 4, name: "Pastry 4", description: "Description", price: "7.00", imageUrl: "https://placehold.co/150x150/E8D6B6/000000?text=Bread1" },
];


// Main App component
const OrderPage = () => {
  return (
    <>

      {/* The main container for the entire application, setting min height, font, and background color */}
      <div className="min-h-screen" style={{ backgroundColor: '#f7f3ed' }}>
        {/* Top Bar: Displays a promo message */}
        <div className="top-bar">
          Order Page
        </div>

        {/* Nav Bar */}
        <nav className="navbar">
          <div className="navbar-container">

            {/* Nav Links */}
            <div className="nav-links">
              <Link to="/CookiesAndGifts" className="nav-link">COOKIES & GIFTS</Link>
              <Link to="/OrderPage" className="nav-link">ORDER</Link>
              <a href="#" className="nav-link">BAKERIES</a>
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

        {/* Products Section: Has all the products, pricing, and their descriptions */}
        <div className="product-grid">

        {/* This maps each product out within the products struct */}
        {products.map(product => (

          <div key={product.id} className="product-card">

            <img src={product.imageUrl} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <div className="price">${product.price}</div>

            <div className="quantity-control">

              <button>-</button>
              <span>1</span> {/* I don't exactly know how to make this dynamic for now*/}
              <button>+</button>

            </div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>

        {/* Footer can be added here if needed */}
      </div>
    </>
  );
};

export default OrderPage;
