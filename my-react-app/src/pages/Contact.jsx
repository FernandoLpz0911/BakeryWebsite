// src/pages/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Assuming Navbar is now modularized

const Contact = () => {
  return (
    // Overall page container, inheriting background from CheckoutFormStyles.css
    // Removed inline style: style={{ backgroundColor: '#f7f3ed' }}
    <div className="contact-page-container"> {/* New class for Contact page overall container */}
      

      {/* Navbar (modularized component) */}
      {/* Assuming Navbar is rendered globally by App.jsx, not directly here. */}
      {/* If your Navbar is NOT rendered globally by App.jsx, you would put <Navbar /> here. */}
      {/* For consistency with previous instructions, Navbar should be in App.jsx */}

      {/* Main Content Area for Contact Page */}
      <main className="contact-main-content">
        <div className="content-wrapper"> {/* Reusing for max-width/centering */}
          <h1 className="section-heading">Contact Us</h1> {/* Reusing heading style */}
          
          <div className="contact-info-and-form"> {/* Wrapper for form and info side-by-side on larger screens */}
            
            {/* Left Column: Contact Form */}
            <div className="contact-form-wrapper">
              <p className="contact-intro-text">
                Have a question about an order, custom sweets, or catering? Send us a message!
              </p>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="contactName">Your Name</label>
                  <input type="text" id="contactName" placeholder="Your Name" className="input-field" />
                </div>
                <div className="form-group">
                  <label htmlFor="contactEmail">Your Email</label>
                  <input type="email" id="contactEmail" placeholder="Your Email" className="input-field" />
                </div>
                <div className="form-group">
                  <label htmlFor="contactPhone">Phone Number (Optional)</label>
                  <input type="tel" id="contactPhone" placeholder="Your Phone Number" className="input-field" />
                </div>
                <div className="form-group">
                  <label htmlFor="contactSubject">Subject (Optional)</label>
                  <input type="text" id="contactSubject" placeholder="e.g., Catering Inquiry, Order Question" className="input-field" />
                </div>
                <div className="form-group">
                  <label htmlFor="contactMessage">Your Message</label>
                  <textarea id="contactMessage" rows="6" placeholder="Tell us more about your sweet needs!" className="input-field textarea-field"></textarea>
                </div>
                <button type="submit" className="submit-inquiry-button">Send Message</button> {/* Reusing submit button style */}
              </form>
            </div> {/* END contact-form-wrapper */}

            {/* Right Column: Additional Contact Info */}
            <div className="contact-details-wrapper">
                <p className="contact-intro-text">
                    Prefer to reach out directly? Find our contact details and hours below.
                </p>
                <div className="contact-details-grid">
                    <div className="detail-item">
                        <span className="detail-icon">✉️</span> {/* Email icon */}
                        <h3 className="detail-label">Email Us</h3>
                        <p className="detail-value"><a href="mailto:FernandoLpz0911@Gmail.com" className="contact-link">FernandoLpz0911@Gmail.com</a></p>
                    </div>
                    <div className="detail-item">
                        <span className="detail-icon">📞</span> {/* Phone icon */}
                        <h3 className="detail-label">Call Us</h3>
                        <p className="detail-value"><a href="tel:+18723057616" className="contact-link">(872)-305-7616</a></p>
                    </div>
                    <div className="detail-item">
                        <span className="detail-icon">⏰</span> {/* Clock icon */}
                        <h3 className="detail-label">Business Hours</h3>
                        <p className="detail-value">Mon - Fri: 9 AM - 5 PM</p>
                        <p className="detail-value">Sat: 10 AM - 2 PM</p>
                        <p className="detail-value">Sun: Closed</p>
                    </div>
                    {/* Add address if applicable */}
                    {/*
                    <div className="detail-item">
                        <span className="detail-icon">📍</span>
                        <h3 className="detail-label">Visit Us</h3>
                        <p className="detail-value">123 Sweet Street</p>
                        <p className="detail-value">Chicago, IL 60601</p>
                    </div>
                    */}
                </div>
                
                {/* Social Media Links */}
                <h3 className="social-heading">Connect With Us</h3>
                <div className="social-links">
                    {/* IMPORTANT: You need to place actual social media icon images (e.g., public/images/social-facebook.png) */}
                    <a href="#" className="social-icon-link">
                        <img src="/images/social-facebook.png" alt="Facebook" /> 
                    </a>
                    <a href="#" className="social-icon-link">
                        <img src="/images/social-instagram.png" alt="Instagram" />
                    </a>
                    <a href="#" className="social-icon-link">
                        <img src="/images/social-twitter.png" alt="Twitter" />
                    </a>
                </div>
            </div> {/* END contact-details-wrapper */}

          </div> {/* END contact-info-and-form */}
        </div> {/* END content-wrapper */}
      </main> {/* END contact-main-content */}

      {/* Footer can be added here if needed */}
    </div>
  );
};

export default Contact;