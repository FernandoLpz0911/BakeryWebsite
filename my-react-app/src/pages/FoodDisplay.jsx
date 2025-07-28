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
      <div className="order-page-container">

        {/* Main Content Area for Products */}
        <main className="order-main-content">
          <div className="content-wrapper"> 

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
          </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to="/" className="back-button">Back to Home</Link>
            </div>

          </div> 
        </main> 

      </div>
    </>
  );
};

export default FoodDisplay;