import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="bg-breadcrumb">
        <nav className="breadcrumb">
          <a href="/" className="breadcrumb-item">
            Home
          </a>
          <span className="breadcrumb-separator">/</span>
          <a href="/contact" className="breadcrumb-item">
            Contact Us
          </a>
        </nav>
      </div>
      <div className="contact-us">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p>
            <i className="fas fa-phone"></i>Pk +92 345 1147272
          </p>
        </div>

        <p className="intro">
          You are welcome to send us suggestions, comments, feedback, and
          complaints by filling out the form below.
        </p>

        <form className="contact-form">
          <label htmlFor="name">Your Name *</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email *</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Your Phone *</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="message">Your Message *</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Us an Email</button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
