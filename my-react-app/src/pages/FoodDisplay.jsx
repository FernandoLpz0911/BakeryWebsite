import { useState, useEffect } from "react"
import client from "../client"
import React from 'react';
import { Link } from 'react-router-dom';


const FoodDisplay = () => {
  const [entries, setEntries] = useState([]);

  // fetch menu entries using Sanity.io
  useEffect(() => {
    client.fetch(
      `*[_type == "item"] {
        name,
        description,
        price,
        image {
          asset -> {
            _id,
            url
          }
        }
      }`
    ).then((data) => {
      console.log("Fetched entries:", data); // 🔍
      setEntries(data)
    })
    .catch(console.error)
  }, []);

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
            {entries.map((item, index) => (
              <div key={index} className="product-card-order-page">
                <img
                  src={item.image?.asset?.url}
                  alt={item.name}
                  className="product-image-order-page"
                />
                <h3 className="product-name-order-page">{item.name}</h3>
                <p className="product-description-order-page">{item.description}</p>
                <div className="product-price-order-page">{item.price}</div>
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