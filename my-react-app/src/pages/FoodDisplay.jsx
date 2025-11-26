import { Link } from 'react-router-dom';
import './cssFiles/foodDisplay.css';

const FoodDisplay = () => {
  // Hardcoded menu data to replace Sanity API
  const entries = [
    {
      name: "Cozy Conchas",
      description: "Traditional comfort, fluffy texture, perfect with coffee.",
      price: "$3.50", /* Adjusted from $5.00 to single item price */
      image: "/images/Conchas.jpg"
    },
    {
      name: "Heartfelt Cakes",
      description: "Sweet gestures for every celebration, baked with joy.",
      price: "$28.00", /* Adjusted to reflect a whole small cake */
      image: "/images/HeartCakes.jpg"
    },
    {
      name: "Assorted Cookies",
      description: "A classic collection for everyday indulgence.",
      price: "$15.00", /* Adjusted to reflect a box/dozen price */
      image: "/images/GiftedDonuts.jpg"
    },
    {
      name: "Joyful Cupcakes",
      description: "Little bursts of happiness for every sweet craving.",
      price: "$4.00", /* Standard artisanal cupcake price */
      image: "/images/IndividualCupcake.jpg"
    },
    {
      name: "Classic Donuts",
      description: "Soft, airy, and perfectly glazed for a morning treat.",
      price: "$3.00", /* Premium donut price */
      image: "/images/Donuts.jpg"
    },
    {
      name: "Event Catering",
      description: "Custom cakes and dessert tables for your special moments.",
      price: "Contact for Quote",
      image: "/images/EventCakes.jpg"
    }
  ];

  return (
    <>
      <div className="order-page-container">

        <main className="order-main-content">
          <div className="content-wrapper"> 

            <h1 className="order-page-header">Explore Our Baked Goods</h1>
            
            <div className="product-grid-order-page">

            {entries.map((item, index) => (
              <div key={index} className="product-card-order-page">
                <img
                  src={item.image}
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