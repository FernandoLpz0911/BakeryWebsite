// src/pages/Events.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    // Overall container, inheriting background from CheckoutFormStyles.css
    <div className="home-page-container"> {/* Reusing for consistent background */}
      {/* Top Bar (consistent across pages) */}
      <div className="top-bar">
        Baked Fresh Daily &bull; Delivered To Your Door
      </div>

      {/* Nav Bar (consistent across pages) */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-links">
            <Link to="/CookiesAndGifts" className="nav-link">COOKIES & GIFTS</Link>
            <Link to="/OrderPage" className="nav-link">ORDER</Link>
            <Link to="/About" className="nav-link">ABOUT</Link>
          </div>
          <Link to="/" className="bakery-logo">Dulce Tentaciones</Link>
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

      {/* Main Content Area for Events/Catering Page */}
      <main className="events-main-content"> {/* New class for the main content wrapper */}
        <div className="content-wrapper"> {/* Reusing for max-width/centering */}

          {/* 1. Events/Catering Hero Section */}
          <section className="events-hero-section section-padded">
            <div className="events-hero-content">
              <div className="events-hero-text">
                <h1 className="events-page-heading">Sweets Tailored for Your Special Events</h1>
                <p className="events-hero-description">
                  From intimate gatherings to grand celebrations, Dulce Tentaciones crafts custom conchas, cakes, and cupcakes that are as unique as your event. Let us add a touch of homemade magic and professional elegance to your next occasion.
                </p>
                <Link to="#inquiry-form" className="events-cta-button">Plan Your Event</Link>
              </div>
              <div className="events-hero-image-wrapper">
                {/* Image of a beautiful dessert setup or custom cake */}
                <img src="/images/catering-hero-placeholder.jpg" alt="Beautiful dessert table for an event" className="events-hero-image" />
              </div>
            </div>
          </section>

          {/* 2. Our Catering Services / Packages */}
          <section className="events-services-section section-padded">
            <h2 className="section-heading">Our Catering Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-title">Custom Cakes</h3>
                <p className="service-description">From elegant wedding tiers to fun birthday designs, our custom cakes are the centerpiece of any celebration.</p>
                <ul>
                  <li>Variety of flavors & fillings</li>
                  <li>Personalized themes & decorations</li>
                  <li>Consultation available</li>
                </ul>
              </div>
              <div className="service-card">
                <h3 className="service-title">Dessert Bars & Platters</h3>
                <p className="service-description">An array of bite-sized treats beautifully arranged for your guests to enjoy.</p>
                <ul>
                  <li>Mini cupcakes, conchas, pastries</li>
                  <li>Customizable assortments</li>
                  <li>Elegant presentation</li>
                </ul>
              </div>
              <div className="service-card">
                <h3 className="service-title">Bulk Orders & Gifts</h3>
                <p className="service-description">Perfect for corporate events, client gifts, or large family gatherings.</p>
                <ul>
                  <li>Branded packaging options</li>
                  <li>Bulk discounts available</li>
                  <li>Nationwide shipping for select items (if applicable, otherwise omit)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Customization Details */}
          <section className="events-customization-section section-padded">
            <div className="customization-content">
              <div className="customization-text">
                <h2 className="section-heading">Personalize Your Sweets</h2>
                <p className="customization-description">
                  We believe your event is unique, and your sweets should be too! We offer extensive customization options to match your theme, colors, and preferences.
                </p>
                <ul>
                  <li>**Flavors:** Choose from our wide selection of cake, frosting, and filling flavors.</li>
                  <li>**Themes:** Bring your vision to life with custom decorations, colors, and designs for cakes and cupcakes.</li>
                  <li>**Branding:** For corporate clients, we can incorporate logos or specific branding elements.</li>
                </ul>
              </div>
              <div className="customization-image-wrapper">
                {/* Image showing custom work or details */}
                <img src="/images/custom-sweets-placeholder.jpg" alt="Custom decorated cakes and cupcakes" className="customization-image" />
              </div>
            </div>
          </section>

          {/* 4. Inquiry Form / How to Order (Anchor for CTA button) */}
          <section id="inquiry-form" className="events-inquiry-section section-padded">
            <h2 className="section-heading">Get a Custom Quote</h2>
            <p className="inquiry-intro">Ready to make your event unforgettable? Fill out the form below to get a personalized quote or schedule a consultation. We look forward to hearing from you!</p>
            <form className="inquiry-form">
              <div className="form-row-two-cols">
                <div className="form-group">
                  <label htmlFor="cateringName">Your Name</label>
                  <input type="text" id="cateringName" placeholder="Your Name" className="input-field" />
                </div>
                <div className="form-group">
                  <label htmlFor="cateringEmail">Email</label>
                  <input type="email" id="cateringEmail" placeholder="Your Email" className="input-field" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cateringPhone">Phone Number</label>
                <input type="tel" id="cateringPhone" placeholder="Phone Number (optional)" className="input-field" />
              </div>
              <div className="form-group">
                <label htmlFor="eventType">Type of Event</label>
                <input type="text" id="eventType" placeholder="e.g., Wedding, Birthday, Corporate" className="input-field" />
              </div>
              <div className="form-group">
                <label htmlFor="eventDate">Preferred Event Date</label>
                <input type="date" id="eventDate" className="input-field" />
              </div>
              <div className="form-group">
                <label htmlFor="guestCount">Estimated Guest Count</label>
                <input type="number" id="guestCount" placeholder="e.g., 50" className="input-field" />
              </div>
              <div className="form-group">
                <label htmlFor="cateringDetails">Tell us about your sweet needs!</label>
                <textarea id="cateringDetails" rows="5" placeholder="e.g., 'Looking for a dessert bar for 50 people, pink and gold theme, need delivery to downtown Chicago.'" className="input-field textarea-field"></textarea>
              </div>
              <button type="submit" className="submit-inquiry-button">Send Inquiry</button>
            </form>
          </section>

          {/* 5. Catering Gallery/Portfolio (Optional, uncomment and add images if you have them) */}
          {/*
          <section className="events-gallery-section section-padded">
            <h2 className="section-heading">Our Event Gallery</h2>
            <div className="gallery-grid">
              <img src="/images/gallery-item-1.jpg" alt="Event setup 1" className="gallery-item" />
              <img src="/images/gallery-item-2.jpg" alt="Event setup 2" className="gallery-item" />
              <img src="/images/gallery-item-3.jpg" alt="Event setup 3" className="gallery-item" />
            </div>
          </section>
          */}

          {/* 6. Catering FAQ (Optional) */}
          {/*
          <section className="events-faq-section section-padded">
            <h2 className="section-heading">Catering FAQ</h2>
            <div className="faq-item">
              <h3 className="faq-question">What is your lead time for catering orders?</h3>
              <p className="faq-answer">We typically require a minimum of 2 weeks notice for custom catering orders, but please contact us for rush inquiries.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you offer delivery and setup?</h3>
              <p className="faq-answer">Yes, we offer delivery and professional setup within the Chicago metropolitan area. Fees vary based on location and complexity.</p>
            </div>
          </section>
          */}

        </div> {/* END content-wrapper */}
      </main> {/* END events-main-content */}
      {/* Footer can be added here if needed */}
    </div>
  );
};

export default Events;