import React from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="img/about.png"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <h5
                  className="text-primary text-uppercase mb-3"
                  style={{ letterSpacing: "5px" }}
                >
                  About Us
                </h5>
                <h1>Innovative Way To Learn</h1>
              </div>
              <p>
                Welcome to Al Mehdi Online Quran Academy, a distinguished Shia
                institution dedicated to providing comprehensive Quranic
                education in a nurturing online environment. Rooted in the
                teachings of Ahl al-Bayt (peace be upon them), our academy
                strives to uphold the rich traditions and values of Shia Islam
                while fostering a deep connection with the Holy Quran.
              </p>
              <p>
                our mission is to empower students worldwide with the knowledge
                and understanding of the Quran, guided by the principles of Ahl
                al-Bayt. We aim to cultivate a love for learning and a profound
                reverence for the Quranic teachings, equipping our students to
                lead spiritually enriched lives.
              </p>
              <a
                href="/"
                className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
