// src/pages/OrderPage.jsx
import React from 'react'; // <--- Removed useState, useContext, useEffect
import { Link } from 'react-router-dom';

// REMOVED: import { CartContext } from '../contexts/CartContext'; // Not needed anymore for this page

// This is your product data. Ensure these image paths lead to your actual images in public/images/
const products = [
  { id: 1, name: "Heartfelt Cakes", description: "Sweet gestures for every celebration, baked with joy.", price: "4.50", imageUrl: "/images/image_b0fce2.jpg" },
  { id: 2, name: "Cozy Conchas", description: "Traditional comfort, fluffy texture, perfect with coffee.", price: "5.00", imageUrl: "/images/image_b0fa1c.jpg" },
  { id: 3, name: "Joyful Cupcakes", description: "Little bursts of happiness for every sweet craving.", price: "3.75", imageUrl: "/images/image_b0fcc2.jpg" },
  { id: 4, name: "Assorted Cookies", description: "A classic collection for everyday indulgence.", price: "7.00", imageUrl: "/images/placeholder-cookies.jpg" }, // Use your own image for this
];


const OrderPage = () => {
  // REMOVED: All cart-related state, context usage, and effects:
  // const { addToCart, getTotalItems } = useContext(CartContext);
  // const [quantities, setQuantities] = useState({});
  // useEffect(() => { ... }, []);

  // REMOVED: All cart-related functions:
  // const handleQuantityChange = (productId, delta) => { ... };
  // const handleAddToCart = (product) => { ... };

  return (
    <>
      {/* The main container for the order page, using the theme-consistent class */}
      {/* The background color is controlled by .order-page-container in CheckoutFormStyles.css */}
      <div className="order-page-container">

        {/* Top Bar: Displays a promo message (consistent across pages) */}
        <div className="top-bar">
          Baked Fresh Daily &bull; Delivered To Your Door
        </div>

        {/* Navbar (this will be rendered by the modular Navbar.jsx component in App.jsx) */}
        {/* Its content will come from src/components/Navbar.jsx, which still has cart count logic */}
        {/* The Navbar component itself should be placed here, or ideally, in App.jsx outside specific page content */}
        {/* For now, I'm assuming Navbar is handled globally by App.jsx as per recent modularization */}

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

                {/* REMOVED: Quantity Control (plus/minus buttons) */}
                {/* <div className="quantity-control-order-page">
                  <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                  <span>{quantities[product.id]}</span>
                  <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                </div> */}

                {/* REMOVED: Add to Cart Button */}
                {/* <button
                  className="add-to-cart-button-order-page"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button> */}
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

export default OrderPage;