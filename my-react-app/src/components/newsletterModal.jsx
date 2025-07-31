import { useState, useEffect } from "react";
import "./newsletter.css";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function NewsletterModal() {
  const [formData, setFormData] = useState({ email: "" });
  const [status, setStatus] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Check localStorage to see if the modal was shown before
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("newsletterPopupSeen");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("newsletterPopupSeen", "true");
      }, 10000); // 10 seconds delay before showing pop=up

      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const response = await fetch(
      "https://api.brevo.com/v3/contacts/doubleOptinConfirmation",
      {
        method: "POST",
        headers: {
          "api-key": API_KEY,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          includeListIds: [3],
          updateEnabled: true,
          templateId: 3,
          redirectionUrl: "https://google.com",
        }),
      }
    );

    if (response.ok) {
      setStatus("Confirmation email sent!");
      setFormData({ email: "" });
    } else {
      const error = await response.json();
      setStatus(`Failed: ${error.message || "Unknown error"}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ×
        </button>
        <h2 className="section-heading">Sign up and sweeten your inbox.</h2>
        <p className="newsletter-description"  style={{ width: "500px" }}>
          Be the first to know about new creations, exclusive promotions, and
          sweet surprises baked just for you.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="emailAndButton">
            <label htmlFor="email" style={{ display: "none" }}>
              Email Address
            </label>
            <input
              className="newsletter-email-input"
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)" }}
            />
            <button
              className="newsletter-submit-button"
              type="submit"
              style={{ boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)" }}
            >
              →
            </button>
          </div>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
}
