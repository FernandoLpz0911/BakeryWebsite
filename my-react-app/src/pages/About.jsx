// src/pages/About.jsx (or App.jsx if it's currently your About page)

import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="about-page-container">

        <div className="top-bar">
          Our Story at Dulce Tentaciones
        </div>

        <nav className="navbar">
          <div className="navbar-container">
            <div className="nav-links">
              <Link to="/CookiesAndGifts" className="nav-link">COOKIES & GIFTS</Link>
              <Link to="/OrderPage" className="nav-link">ORDER</Link>
              <Link to="/About" className="nav-link">ABOUT</Link>
            </div>
            <Link to="/" className="bakery-logo">Dulce Tentaciones</Link>
            <div className="navbar-icons">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <Link to="/Checkout">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
              </Link>
            </div>
          </div>
        </nav>

        <main className="about-main-content">
          {/* Section 1: Our Story Introduction - NOW INTEGRATES THE BAKER'S PHOTO */}
          <section className="about-intro-section section-padded">
            <div className="content-wrapper">
              <h1 className="about-page-heading">The Story of Dulce Tentaciones</h1>
              
              <div className="about-intro-content">
                  <div className="about-intro-text">
                      <p className="about-intro-paragraph">
                          Welcome to Dulce Tentaciones! My name is Maria Rodriguez, and this bakery is my passion project, born from a lifelong love affair with baking. Every cookie, cake, and pastry you find here is a labor of love, baked from the heart, one delicious batch at a time.
                      </p>
                      <p className="about-intro-paragraph">
                          What began as a simple dream in my cozy kitchen has blossomed into Dulce Tentaciones – a place dedicated to spreading joy and comfort through homemade sweets. I believe that the best moments are shared over something delicious, and I'm committed to bringing that warmth directly to your home.
                      </p>
                      <p className="about-intro-paragraph">
                          Thank you for being a part of my sweet journey. I can't wait to bake something special for you!
                      </p>
                  </div>
                  <div className="about-intro-image-wrapper">
                      {/* Using the personal photo here directly */}
                      <img src="/images/your-photo-placeholder.jpg" alt="Maria Rodriguez - Baker & Founder" className="about-intro-image personal-photo" />
                  </div>
              </div>
              
              <Link to="/OrderPage" className="about-shop-cta-button">Explore Our Sweets</Link>
            </div>
          </section>

          {/* REMOVED: Section 2: Meet the Baker (It was redundant) */}
          {/* Your content for this section was HERE and has been removed. */}

          {/* Section 2 (now): Our Philosophy */}
          <section className="about-philosophy-section section-padded">
            <div className="content-wrapper">
                <h2 className="philosophy-heading">Our Philosophy</h2>
                <div className="philosophy-points-grid">
                    <div className="philosophy-card">
                        <h3>Baked with Passion</h3>
                        <p>Every ingredient is chosen for its quality, and every recipe refined with immense care and dedication, ensuring perfection in every bite.</p>
                    </div>
                    <div className="philosophy-card">
                        <h3>Homemade Comfort</h3>
                        <p>We believe in bringing the genuine warmth and nostalgic joy of truly homemade goodness directly from our kitchen to your home.</p>
                    </div>
                    <div className="philosophy-card">
                        <h3>Sweet Moments</h3>
                        <p>Our purpose is to craft delightful experiences, turning ordinary days into special occasions with unique, comforting sweets.</p>
                    </div>
                </div>
            </div>
          </section>

          {/* Section 3 (now): Testimonial */}
          <section className="testimonial-section section-padded">
            <div className="content-wrapper">
              <div className="testimonial-quote">
                “Dulce Tentaciones consistently delivers pure joy. My go-to for happiness in a box!”
              </div>
              <p className="testimonial-source">- A Very Happy Customer</p>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default App;