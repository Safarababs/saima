import React from "react";

function Banner() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-text">
          <h1 className="text-white">
            In the Era of Cutting-Edge Technology and Innovation!
          </h1>
          <p>Embrace the Vital Necessity of Learning Quran Online Today.</p>
        </div>
        <div className="header-action">
          <p>
            Unleash Excellence Beyond Expectations. Secure Your 3-Day Free Trial
            Classes Today
          </p>
          <a href="/contact" className="button">
            Book Free Trial Now
          </a>
        </div>
      </header>
      <section className="content">
        <div className="content-text">
          <h2>
            Embark on a <span>Transformative</span> Journey
          </h2>
          <p>
            Join us today to embark on a transformative Quranic journey with our
            esteemed <a href="/contact">Male Quran Teachers</a>.
          </p>
          <p>Embrace the guidance and inspiration that the Quran offers.</p>
          <p>
            Ready to take the first step? Join Al Mehdi Online Quran Academy now
            for your best future!
          </p>
          <p>
            <strong>Begin Your Learning With Us</strong>
          </p>
          <p>
            Enroll today, and let the Quran enrich your life with wisdom,
            purpose, and spiritual growth. Our Online Quran Teachers are
            committed to helping you unlock the treasures of the Quran. Don't
            miss this opportunity to elevate your Quranic knowledge.
          </p>
        </div>
        <div className="content-image">
          <img src="img/add.jpg" alt="Quran teaching" />
        </div>
      </section>
    </div>
  );
}

export default Banner;
