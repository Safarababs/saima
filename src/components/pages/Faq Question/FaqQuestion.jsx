import React from "react";

const FAQQuestion = () => {
  return (
    <>
      <div className="bg-breadcrumb">
        <nav className="breadcrumb">
          <a href="/" className="breadcrumb-item">
            Home
          </a>
          <span className="breadcrumb-separator">/</span>
          <a href="/faq" className="breadcrumb-item">
            FAQ
          </a>
        </nav>
      </div>
      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faq-item">
          <h2>What is online Quran teaching?</h2>
          <p>
            It is a 1 on 1 live web-based meeting with a telecommunication
            application that provides internet voice calls and screen sharing
            between computers, tablets, and mobile devices. It enables students
            to interact with real-life teachers from any computer with internet
            access. By providing a human touch to Islamic education, we guide
            students personally in order to learn The Holy Quran effectively
            whilst providing an online learning experience through interactive
            technology.
          </p>
        </div>
        <div className="faq-item">
          <h2>Is online Quran teaching helpful?</h2>
          <p>
            Our experience finds 1 to 1 online Quran teaching effective,
            engaging, and useful. Try your free trial session under no
            obligation to form your own opinion about its usefulness.
          </p>
        </div>
        <div className="faq-item">
          <h2>Are you providing these lessons from a CD or software?</h2>
          <p>
            We are providing an online teaching service. Our website is used to
            provide information about our services. Actual teaching is conducted
            by a live teacher at an agreed-upon time. You can read learning
            material and Quran lessons from our website.
          </p>
        </div>
        <div className="faq-item">
          <h2>What if we are not computer or internet expert users?</h2>
          <p>
            Our representative will guide you and your child through the basic
            installation of the software. It takes less than a minute to be
            online and start taking classes. You need very basic familiarity
            with a computer and the internet. You do not need any computer
            expertise to take lessons.
          </p>
        </div>
        <div className="faq-item">
          <h2>Do you only teach Quran?</h2>
          <p>
            No, we also teach other Islamic courses.{" "}
            <a href="/courses">See courses</a>
          </p>
        </div>
        <div className="faq-item">
          <h2>What if I am waiting online and my tutor is not there?</h2>
          <p>
            Please contact our coordinator or call us on the phone number given
            on the website.
          </p>
        </div>
        <div className="faq-footer">
          <p>
            Get equipped with the learning of Quran from professional and
            qualified Quran tutors at{" "}
            <strong>Al Mehdi Online Quran Academy</strong>.
          </p>
          <a href="/register" className="btn-register">
            I want to learn Quran Online
          </a>
        </div>
      </div>
    </>
  );
};

export default FAQQuestion;
