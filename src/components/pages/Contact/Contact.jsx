import React from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch form values
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const serviceID = "service_2o5rq45";
    const templateID = "template_o1kx4h4";
    const userId = "V8T-BnQcnCg_dNTxt";

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, formData, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Your message has been sent successfully!");
        // Optionally clear the form fields
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
      });
  };

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
            <i className="fas fa-phone"></i> Pk +92 345 1147272
          </p>
        </div>

        <p className="intro">
          You are welcome to send us suggestions, comments, feedback, and
          complaints by filling out the form below.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
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
