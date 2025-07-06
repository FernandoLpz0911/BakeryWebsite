import React, { useContext } from 'react'; // <--- ADD useContext
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'; // <--- IMPORT CartContext (adjust path if needed)

const CheckoutPage = () => { // <--- Component name remains CheckoutPage
  // Access cart state and functions from context
  const { cartItems, updateQuantity, removeFromCart, getTotalItems } = useContext(CartContext); // <--- USE CART CONTEXT

  // Calculate cart subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };

  // Assuming shipping is calculated later or is a fixed value/free for local delivery
  const shippingCost = 0.00; // Placeholder for now

  const totalCost = (parseFloat(calculateSubtotal()) + shippingCost).toFixed(2);

  return (
    // Top-level container now uses a custom class for overall page background
    <div className="app-container">
      {/* Top Bar: Displays a promo message */}
      <div className="top-bar">
        Checkout Page
      </div>

      {/* Nav Bar */}
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

            {/* Shopping Bag Icon - MODIFIED TO SHOW ITEM COUNT */}
              <Link to="/Checkout" style={{ position: 'relative' }}> {/* Added style for item count positioning */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                {/* Display total items in cart using the context */}
                <span className="cart-item-count">{getTotalItems()}</span> {/* <--- Display total items */}
              </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area: Form and Order Summary */}
      <div className="hero-section"> {/* This class remains as per your design */}

        {/* LEFT SECTION: Contact & Delivery Forms + Payment & Billing */}
        <div className="form-section"> {/* This class remains as per your design */}
          {/* Contact Section */}
          <h1 className="form-title">Contact</h1>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type='email'
              id="email"
              placeholder="Email"
              className='input-field'
            />
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="newsOffers"
              className="custom-checkbox"
            />
            <label htmlFor="newsOffers">Email me with news and offers</label>
          </div>

          {/* Delivery Section */}
          <h2 className="form-title">Delivery</h2>

          <div className="form-group">
            <label htmlFor="countryRegion">Country/Region</label>
            <select
              id="countryRegion"
              className='select-field'
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="form-row-two-cols">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input
                type='text'
                id="firstName"
                placeholder="First name"
                className='input-field'
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input
                type='text'
                id="lastName"
                placeholder="Last name"
                className='input-field'
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Company (optional)</label>
            <input
              type='text'
              id="company"
              placeholder="Company (optional)"
              className='input-field'
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type='text'
              id="address"
              placeholder="Address"
              className='input-field'
            />
          </div>

          <div className="form-group">
            <label htmlFor="apartment">Apartment, suite, etc (optional)</label>
            <input
              type='text'
              id="apartment"
              placeholder="Apartment, suite, etc"
              className='input-field'
            />
          </div>

          <div className="form-row-three-cols">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type='text'
                id="city"
                placeholder="City"
                className='input-field'
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select
                id="state"
                className='select-field'
              >
                <option value="Illinois">Illinois</option>
                <option value="California">California</option>
                {/* Add more states */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">ZIP code</label>
              <input
                type='text'
                id="zipCode"
                placeholder="ZIP code"
                className='input-field'
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type='tel'
              id="phone"
              placeholder="Phone (optional)"
              className='input-field'
            />
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="saveInfo"
              className="custom-checkbox"
            />
            <label htmlFor="saveInfo">Save this information for next time</label>
          </div>

          <div className="shipping-method-placeholder">
              Enter your shipping address to view available shipping methods.
          </div>

          {/* Payment Section - NEW */}
          <h2 className="section-title-with-top-margin">Payment</h2>

          <div className="form-group">
            <label htmlFor="cardNumber">Card number</label>
            <input
              type='text' // Use text for card number to allow spaces
              id="cardNumber"
              placeholder="Card number"
              className='input-field'
            />
            {/* Card icons can be added here as an img or background-image via CSS on the input */}
            {/* Example: <div className="card-icons">...</div> */}
          </div>

          <div className="form-row-two-cols">
            <div className="form-group">
              <label htmlFor="expirationDate">Expiration date (MM / YY)</label>
              <input
                type='text'
                id="expirationDate"
                placeholder="Expiration date (MM / YY)"
                className='input-field'
              />
            </div>
            <div className="form-group">
              <label htmlFor="securityCode">Security code</label>
              <input
                type='text'
                id="securityCode"
                placeholder="Security code"
                className='input-field'
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="nameOnCard">Name on card</label>
            <input
              type='text'
              id="nameOnCard"
              placeholder="Name on card"
              className='input-field'
            />
          </div>

          <div className="billing-checkbox-container">
            <input
              type="checkbox"
              id="useShippingAsBilling"
              className="custom-checkbox"
            />
            <label htmlFor="useShippingAsBilling">Use shipping address as billing address</label>
          </div>

          {/* Billing Address Section - NEW */}
          <h2 className="section-title-with-top-margin">Billing address</h2>

          <div className="form-group">
            <label htmlFor="billingCountryRegion">Country/Region</label>
            <select
              id="billingCountryRegion"
              className='select-field'
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          <div className="form-row-two-cols">
            <div className="form-group">
              <label htmlFor="billingFirstName">First name</label>
              <input
                type='text'
                id="billingFirstName"
                placeholder="First name"
                className='input-field'
              />
            </div>
            <div className="form-group">
              <label htmlFor="billingLastName">Last name</label>
              <input
                type='text'
                id="billingLastName"
                placeholder="Last name"
                className='input-field'
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="billingCompany">Company (optional)</label>
            <input
              type='text'
              id="billingCompany"
              placeholder="Company (optional)"
              className='input-field'
            />
          </div>

          <div className="form-group">
            <label htmlFor="billingAddress">Address</label>
            <input
              type='text'
              id="billingAddress"
              placeholder="Address"
              className='input-field'
            />
          </div>

          <div className="form-group">
            <label htmlFor="billingApartment">Apartment, suite, etc (optional)</label>
            <input
              type='text'
              id="billingApartment"
              placeholder="Apartment, suite, etc"
              className='input-field'
            />
          </div>

          <div className="form-row-three-cols">
            <div className="form-group">
              <label htmlFor="billingCity">City</label>
              <input
                type='text'
                id="billingCity"
                placeholder="City"
                className='input-field'
              />
            </div>
            <div className="form-group">
              <label htmlFor="billingState">State</label>
              <select
                id="billingState"
                className='select-field'
              >
                <option value="Illinois">Illinois</option>
                <option value="California">California</option>
                {/* Add more states */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="billingZipCode">ZIP code</label>
              <input
                type='text'
                id="billingZipCode"
                placeholder="ZIP code"
                className='input-field'
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="billingPhone">Phone</label>
            <input
              type='tel'
              id="billingPhone"
              placeholder="Phone (optional)"
              className='input-field'
            />
          </div>

          {/* Pay Now Button - NEW */}
          <button className="pay-now-button">Pay now</button>

          {/* Policy Links - NEW */}
          <div className="policy-links-container">
            <a href="#" className="policy-link">Refund policy</a>
            <a href="#" className="policy-link">Shipping policy</a>
            <a href="#" className="policy-link">Privacy policy</a>
            <a href="#" className="policy-link">Terms of service</a>
            <a href="#" className="policy-link">Cancellation policy</a>
          </div>

        </div> {/* END LEFT SECTION */}

        {/* RIGHT SECTION: Order Summary / Checkout Details - MODIFIED FOR CART FUNCTIONALITY */}
        <div className="order-summary-section">
          <h2 className="summary-title">Your Order</h2> {/* Changed title from static "TEST COOKIE" */}
          <div className="cart-items-list">
            {/* Conditional rendering based on cartItems */}
            {cartItems.length === 0 ? (
              <p className="empty-cart-message">Your cart is empty. <Link to="/OrderPage">Shop now!</Link></p>
            ) : (
              // Map over cart items to display them
              cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                    <div className="cart-item-quantity-control">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))
            )}
          </div> {/* END cart-items-list */}

          <div className="summary-divider"></div>

          {/* Subtotal, Shipping, Total */}
          <div className="summary-line">
            <span>Subtotal</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <div className="summary-line">
            <span>Shipping</span>
            <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
          </div>
          <div className="summary-total summary-line">
            <span>Total</span>
            <span>USD ${totalCost}</span>
          </div>
        </div> {/* END order-summary-section */}

      </div> {/* END hero-section */}

      {/* Footer can be added here if needed */}
    </div>
  );
};

export default CheckoutPage;