import React from "react";

const Vision = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="img/vision.webp"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <h1>
                  {" "}
                  Our <span style={{ color: "#006daf" }}>Vision</span>
                </h1>
              </div>

              <p style={{ textAlign: "left" }}>
                At Al Mehdi Online Quran Academy, our vision is to provide a
                comprehensive and accessible platform for individuals seeking to
                deepen their understanding and connection with the Holy Quran.
                We aim to cultivate a community of lifelong learners who are
                empowered by the teachings of the Quran to lead exemplary lives
                guided by the principles of compassion, integrity, and wisdom.
                Through innovative online learning methods and a commitment to
                excellence, we strive to instill a profound love for the Quran
                and its teachings, inspiring our students to become ambassadors
                of peace and knowledge in their communities.
              </p>
              <p></p>
              <a
                href="/contact"
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

export default Vision;
