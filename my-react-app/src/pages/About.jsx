import { Link } from 'react-router-dom';
import './cssFiles/about.css';

const App = () => {
  return (
    <>
      <div className="about-page-container">
        <main className="about-main-content">

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
              </div>
              
              <Link to="/FoodDisplay" className="about-shop-cta-button">Explore Our Sweets</Link>

            </div>
          </section>

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

          <section className="testimonial-section section-padded">

            <div className="content-wrapper">

              <div className="testimonial-quote">
                “Dulce Tentaciones consistently delivers pure joy. My go-to for happiness in a box!”
              </div>

              <p className="testimonial-source">- Stephany Delgado</p>
            </div>

          </section>

        </main>
      </div>
    </>
  );
};

export default App;