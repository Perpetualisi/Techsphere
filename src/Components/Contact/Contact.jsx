import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id='contact' className="contact-section">
      <h2>Contact Us</h2>
      <p>Have any questions? Reach out to us!</p>
      
    
      <div className="business-hours">
        <h3>Opening Hours</h3>
        <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
        <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
        <p><strong>Sunday:</strong> Closed</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {submitted && <p className="success-message">Message sent successfully!</p>}
    </section>
  );
};

export default Contact;
