import React from "react";

const Mission = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <h1>
                  Our <span style={{ color: "#006daf" }}>Mission</span>
                </h1>
              </div>
              <p style={{ textAlign: "left" }}>
                Our mission at Al Mehdi Online Quran Academy is to offer a
                transformative online learning experience that nurtures a deep
                and meaningful relationship with the Quran. We are dedicated to
                providing high-quality, personalized education that is
                accessible to all, regardless of background or location. By
                combining traditional Islamic teachings with modern technology,
                we aim to equip our students with the knowledge, understanding,
                and spiritual guidance needed to navigate the challenges of the
                modern world in accordance with the teachings of the Quran. We
                strive to cultivate a strong sense of community and belonging,
                fostering a supportive environment where students can grow
                intellectually, spiritually, and morally, ultimately becoming
                compassionate and knowledgeable ambassadors of Islam.
              </p>

              <a
                href="/contact"
                className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
              >
                Learn More
              </a>
            </div>
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="img/mission.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
