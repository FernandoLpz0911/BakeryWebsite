import React, { useRef, useState, useEffect } from 'react'; // Import useState
import emailjs from '@emailjs/browser';
import './cssFiles/contact.css';


// Contact Page
const Contact = () => {
  const form = useRef();  // makes the form reactive
  
  /**
   * setButtonText: Sets the text of the button, contained as a string
   * isSending: State to disable the button while sending, contained as a boolean
   * messageStatus: State to show success or fail message after sending, contained as a string
   *                (shows null as no string set yet)
   */
  const [buttonText, setButtonText] = useState('Send Message');
  const [isSending, setIsSending] = useState(false); 
  const [messageStatus, setMessageStatus] = useState(null); 

  // initialize the emailjs service
  useEffect(() => {
    emailjs.init('5WhVsHFC0WI8ZP7jJ');
  }, []);

  // function to send the email to emailjs service
  const sendEmail = (e) => {
    e.preventDefault();// Prevent default html form submission behavior, html default reloads entire page

    // disable button, show sending, and clear the previous message status
    setIsSending(true);
    setButtonText('Sending...');
    setMessageStatus(null);

    // send the form data to emailjs
    emailjs.sendForm('default_service', 'template_c9ycbm5', form.current)
      .then(

        // if successful, state successful, and reset the form
        () => {
          console.log('SUCCESS!');
          setButtonText('Message Sent!'); 
          setMessageStatus('success');
          form.current.reset();

          // Set a timeout to revert the button back
          setTimeout(() => {
            setButtonText('Send Message'); 
            setMessageStatus(null);
            setIsSending(false); 
          }, 4000); // 4 seconds delay
        },

        // if failed, state failure, and reset the button back
        (error) => {
          console.error('FAILED:', error);
          setButtonText('Message Failed!'); 
          setMessageStatus('fail');

          setTimeout(() => {
            setButtonText('Send Message');
            setMessageStatus(null);
            setIsSending(false);
          }, 4000); 
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

                <button
                  type="submit"
                  // if successful, change the button to success, if failed, change the button to fail changing the css class, fancy lol
                  className={`submit-inquiry-button ${messageStatus === 'success' ? 'success' : ''} ${messageStatus === 'fail' ? 'fail' : ''}`}
                  disabled={isSending}
                >
        
                  {buttonText}
                </button>
              </form>
            </div>

            <div className="contact-details-wrapper">

              <p className="contact-intro-text">
                Prefer to chat? Find our contact details and hours below.
              </p>

              <div className="contact-details-grid">
                <div className="detail-item">
                  <span className="detail-icon">✉️</span>
                  <h3 className="detail-label">Email Us</h3>
                  <p className="detail-value"><a href="mailto:ourdulcetentaciones@gmail.com" className="contact-link">ourdulcetentaciones@gmail.com</a></p>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">⏰</span>
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