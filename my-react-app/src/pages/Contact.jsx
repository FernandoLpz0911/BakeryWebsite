import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useEffect } from 'react';  // import to use emailjs functionalities

const Contact = () => {

  const form = useRef();  // define form as being able to be changed locally without needing a refresh

  // Initialize EmailJS with the user ID, kind of like an API key
  useEffect(() => {
  emailjs.init('5WhVsHFC0WI8ZP7jJ');
  }, []);

  // Sends email using EmailJS when the form is submitted
  const sendEmail = (e) => {

    /*
     html usually reloads page on form submission, prevent
     * that so we can clear the fields and show success message
     */
    e.preventDefault();

    // sends form data to EmailJS service
    emailjs.sendForm('default_service', 'template_c9ycbm5', form.current)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.error('FAILED:', error);
        }
      );
  };

  return (

    <div className="contact-page-container">

      <main className="contact-main-content">
        <div className="content-wrapper"> 

          <h1 className="section-heading">Contact Us</h1> 

          <div className="contact-info-and-form"> 
            <div className="contact-form-wrapper">

              <p className="contact-intro-text">
                Have a question about an order, custom sweets, or catering? Send us a message!
              </p>

              <form ref={form} className="contact-form" onSubmit={sendEmail}>

                <div className="form-group">
                  <label htmlFor="contactName">Your Name</label>
                  <input type="text" id="contactName" name="user_name" placeholder="Your Name" className="input-field" />
                </div>

                <div className="form-group">
                  <label htmlFor="contactEmail">Your Email</label>
                  <input type="email" id="contactEmail" name="user_email" placeholder="Your Email" className="input-field" />
                </div>

                <div className="form-group">
                  <label htmlFor="contactPhone">Phone Number (Optional)</label>
                  <input type="tel" id="contactPhone" name="user_phone" placeholder="Your Phone Number" className="input-field" />
                </div>

                <div className="form-group">
                  <label htmlFor="contactSubject">Subject (Optional)</label>
                  <input type="text" id="contactSubject" name="user_subject" placeholder="e.g., Catering Inquiry, Order Question" className="input-field" />
                </div>

                <div className="form-group">
                  <label htmlFor="contactMessage">Your Message</label>
                  <textarea id="contactMessage" name="user_message" rows="6" placeholder="Tell us more about your sweet needs!" className="input-field"></textarea>
                </div>

                <button type="submit" className="submit-inquiry-button">Send Message</button>

              </form>
            </div>

            <div className="contact-details-wrapper">
               
              <p className="contact-intro-text">
                  Prefer to chat? Find our contact details and hours below.
              </p>

              <div className="contact-details-grid">

                  <div className="detail-item"> 
                      <span class="detail-icon">✉️</span>
                      <h3 className="detail-label">Email Us</h3>
                      <p className="detail-value"><a href="mailto:ourdulcetentaciones@gmail.com" className="contact-link">ourdulcetentaciones@gmail.com</a></p>
                  </div>

                  <div className="detail-item">
                    <span class="detail-icon"></span>
                    <h3 className="detail-label">Connect With Us</h3>

                    <div className='social-wrapper'>

                      <a href="#" className="social-icon-link">
                          <img src="/BakeryWebsite/images/social-facebook.png" alt="Facebook" /> 
                      </a>

                      <a href="#" className="social-icon-link">
                          <img src="/BakeryWebsite/images/social-instagram.png" alt="Instagram" />
                      </a>

                      <a href="#" className="social-icon-link">
                          <img src="/BakeryWebsite/images/social-twitter.png" alt="Twitter" />
                      </a>

                    </div>
                  </div>

                  <div className="detail-item"> 
                      <span class="detail-icon">⏰</span>
                      <h3 className="detail-label">Business Hours</h3>
                      <p className="detail-value">Mon - Fri: 9 AM - 5 PM</p>
                      <p className="detail-value">Sat: 10 AM - 2 PM</p>
                      <p className="detail-value">Sun: Closed</p>
                  </div>

                </div>
                
            </div> 

          </div> 
        </div> 
      </main> 
    </div>
  );
};

export default Contact;