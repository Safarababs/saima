import React from "react";

const Feature = () => {
  return (
    <>
      <div className="container-fluid feature bg-light py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h4 className="text-primary">Why Choose</h4>
            <h1 className="display-4 mb-4">Al Mehdi Online Quran Academy</h1>
            <p className="mb-0">
              Al Mehdi Online Quran Academy stands out as a premier choice for
              Quranic education due to its commitment to providing expert
              guidance, flexible learning options, and interactive classNamees.
              Students benefit from personalized instruction delivered by
              experienced tutors who possess a deep understanding of Quranic
              teachings. The academy's flexible approach allows students to
              schedule lessons at their convenience, ensuring that learning fits
              seamlessly into their lives. Additionally, Al Mehdi Online Quran
              Academy offers dynamic and interactive classNamees that enhance
              understanding and retention, fostering a rich and engaging
              learning experience for all students.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="feature-item p-4 pt-0">
                <div className="feature-icon p-4 mb-4">
                  <i className="far fa-handshake fa-3x"></i>
                </div>
                <h4 className="mb-4">Trusted Academy</h4>
                <p className="mb-4">
                  A trusted academy offering high-quality education, fostering
                  deep understanding and appreciation.
                </p>
                <a
                  className="btn btn-primary rounded-pill py-2 px-4"
                  href="/contact"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="feature-item p-4 pt-0">
                <div className="feature-icon p-4 mb-4">
                  <i className="fa fa-dollar-sign fa-3x"></i>
                </div>
                <h4 className="mb-4">Affordable</h4>
                <p className="mb-4">
                  We are An affordable academy and we are offering quality
                  education with accessibility, value, and excellence.
                </p>
                <a
                  className="btn btn-primary rounded-pill py-2 px-4"
                  href="/contact"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="feature-item p-4 pt-0">
                <div className="feature-icon p-4 mb-4">
                  <i className="fa fa-bullseye fa-3x"></i>
                </div>
                <h4 className="mb-4">Flexible Timing</h4>
                <p className="mb-4">
                  With the help of our teacher in globe we are offering
                  convenient timing options for personalized learning
                  experiences.
                </p>
                <a
                  className="btn btn-primary rounded-pill py-2 px-4"
                  href="/contact"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="feature-item p-4 pt-0">
                <div className="feature-icon p-4 mb-4">
                  <i className="fa fa-headphones fa-3x"></i>
                </div>
                <h4 className="mb-4">24/7 Fast Support</h4>
                <p className="mb-4">
                  24/7 fast support, ensuring immediate assistance and guidance
                  for all queries for better education of you and your child.
                </p>
                <a
                  className="btn btn-primary rounded-pill py-2 px-4"
                  href="/contact"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
