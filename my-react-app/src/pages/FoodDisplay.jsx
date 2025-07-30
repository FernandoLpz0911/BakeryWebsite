import { useState, useEffect } from "react"
import client from "../client"
import React from 'react';
import { Link } from 'react-router-dom';


const FoodDisplay = () => {
  const [entries, setEntries] = useState([]); // set key-val pair of entries to empty array for now

  // Perform a fetch operation to retrieve the menu entries from Sanity.io
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
      console.log("Fetched entries:", data); // Debug logged entries
      setEntries(data)  // Set data from the fetch
    })
    .catch(console.error)
  }, []);

  return (
    <>
      <div className="order-page-container">

        <main className="order-main-content">
          <div className="content-wrapper"> 

            <h1 className="order-page-header">Explore Our Baked Goods</h1>
            
            <div className="product-grid-order-page">

            {/* retrieve all maps from database and display the item and pricing key-value pair */}
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