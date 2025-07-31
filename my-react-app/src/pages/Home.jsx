import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import Contact from "../components/contact";
import NewsletterModal from "../components/newsletterModal";

import './cssFiles/home.css';

const Home = () => {

  // put the images here and begin setImages function here
  const [images, setImages] = useState([
    "/BakeryWebsite/images/Cupcakes.jpg",
    "/BakeryWebsite/images/HeartCakes.jpg",
    "/BakeryWebsite/images/Conchas.jpg",
    "/BakeryWebsite/images/IndividualCupcake.jpg",
  ]);

  // set if animation is currently going and direction
  const [animating, setAnimating] = useState(false); // State to control animation
  const [animationDirection, setAnimationDirection] = useState(null); // 'left' or 'right'

  const carouselRef = useRef(null); // Reference to the carousel container

  // function that slides the image left
  const slideLeft = () => {
    if (animating) return; // Prevent multiple clicks during animation
    setAnimating(true);
    setAnimationDirection('left');

    // slide the top image out to the left then shift the array
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const lastImage = newImages.pop();
      newImages.unshift(lastImage);
      return newImages;
    });

    setTimeout(() => {
      setAnimating(false);
      setAnimationDirection(null);
    }, 500); // 500ms to transition
  };

  // slide right
  const slideRight = () => {
    if (animating) return;
    setAnimating(true);
    setAnimationDirection('right');

    setTimeout(() => {

        // moves the first image to the end of the array and shift left
        setImages((prevImages) => {
            const newImages = [...prevImages];
            const firstImage = newImages.shift();
            newImages.push(firstImage);
            return newImages;
        });
        setAnimating(false);
        setAnimationDirection(null);
    }, 500);
  };


  return (
    <div className="home-page-container">
      <section className="hero-section">
        <div className="hero-content">

          <div className="hero-image-carousel" ref={carouselRef}>

            {images.map((imageSrc, index) => (// map through the images and display them
              <img
                key={imageSrc}
                src={imageSrc}
                alt={`Sweet treat ${index + 1}`}
                className={`hero-image ${animating && index === 0 ? `slide-${animationDirection}` : ''}`} // compare the index to the first image and use the animation function
                style={{ zIndex: images.length - index }}
              />
            ))}

            <button className="carousel-nav-button prev" onClick={slideLeft}>&#10094;</button>
            <button className="carousel-nav-button next" onClick={slideRight}>&#10095;</button>
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