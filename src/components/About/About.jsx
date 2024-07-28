import React from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid bg-light about pb-5">
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item-content bg-white rounded p-5 h-100">
                <h4 className="text-primary">About Our Company</h4>
                <h1 className="display-4 mb-4">
                  Al Mehdi Online Quran Academy
                </h1>
                <p>
                  A distinguished Shia institution dedicated to providing
                  comprehensive Quranic education in a nurturing online
                  environment. Rooted in the teachings of Ahl al-Bayt (peace be
                  upon them), our academy strives to uphold the rich traditions
                  and values of Shia Islam while fostering a deep connection
                  with the Holy Quran.
                </p>
                <p>
                  our mission is to empower students worldwide with the
                  knowledge and understanding of the Quran, guided by the
                  principles of Ahl al-Bayt. We aim to cultivate a love for
                  learning and a profound reverence for the Quranic teachings,
                  equipping our students to lead spiritually enriched lives.
                </p>
                <p className="text-dark">
                  <i className="fa fa-check text-primary me-3"></i>Word by word
                  Tajweed-e-Quran
                </p>
                <p className="text-dark">
                  <i className="fa fa-check text-primary me-3"></i>Availability
                  of Female Quran Teacher for Kids and Women
                </p>
                <p className="text-dark mb-4">
                  <i className="fa fa-check text-primary me-3"></i>Monthly
                  progress report of children's proficiency is flexible
                </p>
                <a
                  className="btn btn-primary rounded-pill py-3 px-5"
                  href="/contact"
                >
                  More Information
                </a>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="bg-white rounded p-5 h-100">
                <div className="row g-4 justify-content-center">
                  <div className="col-12">
                    <div className="rounded bg-light">
                      <img
                        src="img/about-1.png"
                        className="img-fluid rounded w-100"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="counter-item bg-light rounded p-3 h-100">
                      <div className="counter-counting">
                        <span
                          className="text-primary fs-2 fw-bold"
                          data-toggle="counter-up"
                        >
                          10
                        </span>
                        <span className="h1 fw-bold text-primary">+</span>
                      </div>
                      <h4 className="mb-0 text-dark">Skilled Teacher</h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item bg-light rounded p-3 h-100">
                      <div className="counter-counting">
                        <span
                          className="text-primary fs-2 fw-bold"
                          data-toggle="counter-up"
                        >
                          1000
                        </span>
                        <span className="h1 fw-bold text-primary">+</span>
                      </div>
                      <h4 className="mb-0 text-dark">Students</h4>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="rounded bg-light">
                      <img
                        src="img/about-2.png"
                        className="img-fluid rounded w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="rounded bg-light">
                      <img
                        src="img/about-3.png"
                        className="img-fluid rounded w-100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
