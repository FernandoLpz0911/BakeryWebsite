import { Link } from 'react-router-dom';

const Home = () => {
  return (
    // Overall container for Home page, applies the very light pink background from CSS
    <div className="home-page-container">
      
      {/* 1. Hero Section - Replacing your existing hero-section content */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            {/* Using your cupcake image (image_b0fcc2.jpg) for the hero */}
            <img src="/BakeryWebsite/images/Cupcakes.jpg" alt="Festive Cupcakes" className="hero-image" />
            <div className="hero-badge">Here All Year Around!</div> {/* Adapted from your 'summer-tag' */}
          </div>
          <div className="hero-text">
            <h1 className="hero-headline">Handmade Sweets, Baked with Heart</h1>
            <p className="hero-description">
              Bringing the warmth of home to every delightful bite. Discover our comforting cakes, cookies, and pastries, perfect for sharing sweet moments.
            </p>
            <Link to="/FoodDisplay" className="hero-cta-button">Shop Our Creations</Link>
          </div>
        </div>
      </section>

      {/* 2. Featured Products / Our Beloved Creations Section - Inspired by Levain's "Shop Fan Favorites" */}
      <section className="featured-products-section">
        <h2 className="section-heading">Our Beloved Creations</h2>
        <div className="product-grid">
          {/* Product Card 1: Heart Cakes (image_b0fce2.jpg) */}
          <div className="product-card">
            <img src="/BakeryWebsite/images/HeartCakes.jpg" alt="Heart-shaped Cakes" className="product-image" />
            <h3 className="product-title">Heartfelt Cakes</h3>
            <p className="product-description">Sweet gestures for every celebration, baked with joy.</p>
            <Link to="/FoodDisplay" className="product-cta-button">View Cakes</Link>
          </div>
          {/* Product Card 2: Conchas (image_b0fa1c.jpg) */}
          <div className="product-card">
            <img src="/BakeryWebsite/images/Conchas.jpg" alt="Assorted Conchas" className="product-image" />
            <h3 className="product-title">Cozy Conchas</h3>
            <p className="product-description">Traditional comfort, fluffy texture, perfect with coffee.</p>
            <Link to="/FoodDisplay" className="product-cta-button">Explore Pastries</Link>
          </div>
          {/* Product Card 3: Cupcakes */}
          <div className="product-card">
            <img src="/BakeryWebsite/images/IndividualCupcake.jpg" alt="Star Cupcakes" className="product-image" />
            <h3 className="product-title">Joyful Cupcakes</h3>
            <p className="product-description">Little bursts of happiness for every sweet craving.</p>
            <Link to="/FoodDisplay" className="product-cta-button">Discover Cupcakes</Link>
          </div>
        </div>
      </section>

      {/* 3. Our Story / Brand Philosophy Section" */}
      <section className="about-us-section">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-heading">Our Sweet Beginning</h2>
            {/* REVISED DESCRIPTION BELOW */}
            <p className="about-description">
              At Dulce Tentaciones, every treat is a labor of love, baked from the heart, one batch at a time. As a one-person startup, I pour my passion into crafting more than just desserts; I create moments of joy and comfort, freshly made just for you.
            </p>
            <p className="about-description">
              Founded on the simple dream of sharing homemade goodness, Dulce Tentaciones began as my heartfelt solo venture. From my kitchen, I'm dedicated to spreading warmth and delight with every unique, fresh-baked creation.
            </p>
            <Link to="/About" className="learn-more-button">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* 4. Testimonials / Accolades Section - Inspired by Levain's quotes */}
      <section className="testimonial-section">
        <div className="testimonial-quote">
          “Every treat from Dulce Tentaciones feels like a warm hug from home. Pure comfort in every bite!”
        </div>
        <p className="testimonial-source">- Estevan Garcia</p>
      </section>

      {/* 5. Gifts & Occasions Section - Inspired by Levain's "Cookies for Every Occasion" */}
      <section className="gifts-occasions-section">
        <h2 className="section-heading">Sweets for Every Special Moment</h2>
        <div className="occasion-grid">
            {/* Occasion Card 1: Thoughtful Gifts (Placeholder image) */}
            <div className="occasion-card">
                <img src="/BakeryWebsite/images/GiftedDonuts.jpg" alt="Thoughtful Gifts" className="occasion-image" />
                <h3 className="occasion-title">Thoughtful Gifts</h3>
                <p className="occasion-description">Show appreciation with beautifully packaged, delicious treats for clients and loved ones.</p>
                <Link to="/FoodDisplay" className="occasion-cta-button">Shop Gifts</Link>
            </div>
            {/* Occasion Card 2: Joyful Events (Placeholder image) */}
            <div className="occasion-card">
                <img src="/BakeryWebsite/images/BirthdayCake.jpg" alt="Events & Catering" className="occasion-image" />
                <h3 className="occasion-title">Joyful Events</h3>
                <p className="occasion-description">Make your gatherings sweeter with our custom desserts and catering options.</p>
                <Link to="/FoodDisplay" className="occasion-cta-button">Plan Your Event</Link>
            </div>
        </div>
      </section>

      {/* 6. Newsletter CTA Section - Inspired by Levain's footer newsletter */}
      <section className="newsletter-cta-section">
        <h2 className="section-heading">Sign up and sweeten your inbox.</h2>
        <p className="newsletter-description">Be the first to know about new sweet creations, exclusive promotions, and heartwarming surprises, baked just for you.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Email" className="newsletter-email-input" />
          <button className="newsletter-submit-button">→</button>
        </div>
      </section>

      <Link to="/LoginPage">
        <text>
          Admin
        </text>
      </Link>

      {/* Footer can be added here if needed */}
      {/* (If you have a global Footer component, it might be outside this Home component in App.jsx) */}

    </div>
  );
};

export default Home;