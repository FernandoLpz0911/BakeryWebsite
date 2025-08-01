import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function BrevoForm() {
  const [formData, setFormData] = useState({ email: "" }); // store form data
  const [status, setStatus] = useState(null); // success/fail

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
          "api-key": API_KEY, // CHANGES IF WE SWITCH ACCOUNTS --> update API key in .env file
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          includeListIds: [3], // CHANGES IF WE SWITCH ACCOUNTS --> replace with correct list ID
          updateEnabled: true,
          templateId: 3, // CHANGES IF WE SWITCH ACCOUNTS --> replace with correct template ID
          redirectionUrl: "https://google.com" // TEMP; UPDATE WITH ACTUAL SITE DOMAIN
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

  return (
    <>
      <div className="newsletter-cta-section">
        <h2 className="newsletter-heading">Sign Up And Sweeten Your Inbox.</h2>
        <p className="newsletter-description">
          Be the first to know about New Creations, Exclusive Promotions, <br />
          and Sweet Surprises baked just for you.
        </p>
      </div>

      <div style={{ maxWidth: "450px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <div className="emailAndButton">
            <label htmlFor="email" style={{ display: "none" }}>
              Email Address
            </label>{" "}
            {/* ^ label for accessibility purposes */}
            <input
              className="newsletter-email-input"
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button className="newsletter-submit-button" type="submit">
              →
            </button>
          </div>
          {
            status && (
              <p className="form-status">{status}</p>
            ) /* display success/fail confirmation */
          }

          {/* these fields are meant to filter bots (they are not visible to
                    humans, so if filled out, it was likely by a bot!) */}
          <div>
            <input type="hidden" name="email_address_check" defaultValue="" />
            <input type="hidden" name="locale" value="en" />
          </div>
        </form>
      </div>
    </>
  );
}
