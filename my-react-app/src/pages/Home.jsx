import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import Contact from "../components/contact";
import NewsletterModal from "../components/newsletterModal";

import './cssFiles/home.css';

const Home = () => {
  const allImages = useRef([ // base array of image paths
    "/BakeryWebsite/images/HeartCakes.jpg",
    "/BakeryWebsite/images/Conchas.jpg",
    "/BakeryWebsite/images/Cupcakes.jpg",
    "/BakeryWebsite/images/Donuts.jpg",
    "/BakeryWebsite/images/EventCakes.jpg"
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);  // current img index
  const [leavingImageIndex, setLeavingImageIndex] = useState(null); // idx of image leaving
  const [direction, setDirection] = useState(null); // slide direction, uses next or prev

  const carouselRef = useRef(null); // can be adjusted

  // Function to move to the next image
  const goToNext = () => {
    if (leavingImageIndex !== null) return; // Prevent new animation if one is in progress

    setDirection('next');
    setLeavingImageIndex(currentImageIndex); 

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.current.length);
      setLeavingImageIndex(null); 
      setDirection(null);
    }, 300); 
  };

  // Function to move to the previous image
  const goToPrev = () => {
    if (leavingImageIndex !== null) return; // prevent animation if in progress

    setDirection('prev');

    // set the leaving image idx to the current one
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.current.length) % allImages.current.length);
    setLeavingImageIndex(currentImageIndex);

    setTimeout(() => {
      setLeavingImageIndex(null);
      setDirection(null);
    }, 600); 
  };


  return (
    <div className="home-page-container">
      <section className="hero-section">
        <div className="hero-content">

          <div className="hero-image-carousel" ref={carouselRef}>
            {allImages.current.map((imageSrc, index) => {
              let classes = "hero-image";
              let zIndex = 0; // default image index

              if (index === currentImageIndex) {
                classes += " active"; // set image fully visible
                zIndex = allImages.current.length; // set it on top
              } else if (index === leavingImageIndex) {
                classes += ` leaving-${direction}`; // make image slide out below new top
                zIndex = allImages.current.length - 1;
              } else {
                zIndex = allImages.current.length - Math.abs(currentImageIndex - index);
                if (zIndex <= 0) zIndex = 1; // make sure we're never at negative index
              }

              return (
                <img
                  key={imageSrc}
                  src={imageSrc}
                  alt={`Sweet treat ${index + 1}`}
                  className={classes}
                  style={{ zIndex: zIndex }}
                />
              );
            })}

            <button className="carousel-nav-button prev" onClick={goToPrev}>&#10094;</button>
            <button className="carousel-nav-button next" onClick={goToNext}>&#10095;</button>
          </div>

          <div className="hero-text">
            <h1 className="hero-headline">Handmade Sweets, Baked with Heart</h1>
            <p className="hero-description">
              Bringing the warmth of home to every delightful bite. Discover our
              comforting cakes, cookies, and pastries, perfect for sharing sweet
              moments.
            </p>

            <Link to="/FoodDisplay" className="hero-cta-button">
              Shop Our Creations
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-products-section">
        <h2 className="section-heading">Our Beloved Creations</h2>
        <div className="product-grid">
          <div className="product-card">
            <img
              src="/BakeryWebsite/images/HeartCakes.jpg"
              alt="Heart-shaped Cakes"
              className="product-image"
            />
            <h3 className="product-title">Heartfelt Cakes</h3>
            <p className="product-description">
              Sweet gestures for every celebration, baked with joy.
            </p>
            <Link to="/FoodDisplay" className="product-cta-button">
              View Cakes
            </Link>
          </div>

          <div className="product-card">
            <img
              src="/BakeryWebsite/images/Conchas.jpg"
              alt="Assorted Conchas"
              className="product-image"
            />
            <h3 className="product-title">Cozy Conchas</h3>
            <p className="product-description">
              Traditional comfort, fluffy texture, perfect with coffee.
            </p>
            <Link to="/FoodDisplay" className="product-cta-button">
              Explore Pastries
            </Link>
          </div>

          <div className="product-card">
            <img
              src="/BakeryWebsite/images/IndividualCupcake.jpg"
              alt="Star Cupcakes"
              className="product-image"
            />
            <h3 className="product-title">Joyful Cupcakes</h3>
            <p className="product-description">
              Little bursts of happiness for every sweet craving.
            </p>
            <Link to="/FoodDisplay" className="product-cta-button">
              Discover Cupcakes
            </Link>
          </div>
        </div>
      </section>

      <section className="about-us-section">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-heading">Our Sweet Beginning</h2>

            <p className="about-description">
              At Dulce Tentaciones, every treat is a labor of love, baked from
              the heart, one batch at a time. As a one-person startup, I pour my
              passion into crafting more than just desserts; I create moments of
              joy and comfort, freshly made just for you.
            </p>

            <p className="about-description">
              Founded on the simple dream of sharing homemade goodness, Dulce
              Tentaciones began as my heartfelt solo venture. From my kitchen,
              I'm dedicated to spreading warmth and delight with every unique,
              fresh-baked creation.
            </p>

            <Link to="/About" className="learn-more-button">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-quote">
          “Every treat from Dulce Tentaciones feels like a warm hug from home.
          Pure comfort in every bite!”
        </div>

        <p className="testimonial-source">- Estevan Garcia</p>
      </section>

      <section className="gifts-occasions-section">
        <h2 className="section-heading">Sweets for Every Special Moment</h2>

        <div className="occasion-grid">
          <div className="occasion-card">
            <img
              src="/BakeryWebsite/images/GiftedDonuts.jpg"
              alt="Thoughtful Gifts"
              className="occasion-image"
            />
            <h3 className="occasion-title">Thoughtful Gifts</h3>
            <p className="occasion-description">
              Show appreciation with beautifully packaged, delicious treats for
              clients and loved ones.
            </p>
            <Link to="/FoodDisplay" className="occasion-cta-button">
              Shop Gifts
            </Link>
          </div>

          <div className="occasion-card">
            <img
              src="/BakeryWebsite/images/BirthdayCake.jpg"
              alt="Events & Catering"
              className="occasion-image"
            />
            <h3 className="occasion-title">Joyful Events</h3>
            <p className="occasion-description">
              Make your gatherings sweeter with our custom desserts and catering
              options.
            </p>
            <Link to="/FoodDisplay" className="occasion-cta-button">
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>
      
      <section className="newsletter-cta-section">
        <Contact />
      </section>

      <section>
        <NewsletterModal />
      </section>
    </div>
  );
};

export default Home;