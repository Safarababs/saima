import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-12">
              <div className="mb-5">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-6 col-xl-5">
                    <div className="footer-item">
                      <a href="/" className="p-0">
                        <img src="img/logo.png" alt="Logo" />
                        <h4
                          className="text-white mb-4"
                          style={{
                            display: "inline-block",
                            marginLeft: "1rem",
                          }}
                        >
                          Al Mehdi Online Quran Academy
                        </h4>
                      </a>

                      <p className="text-white mb-4">
                        At Al Mehdi Online Quran Academy, we are dedicated to
                        providing a premier educational experience in Quranic
                        studies through the power of modern technology. Our
                        academy offers a unique online platform where students
                        can engage in one-on-one live sessions with highly
                        qualified and experienced teachers. This interactive
                        approach allows us to deliver personalized instruction
                        that is both effective and inspiring.
                      </p>
                      <div className="footer-btn d-flex">
                        <a
                          className="btn btn-md-square rounded-circle me-3"
                          href="https://www.facebook.com/almehdiquran"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="btn btn-md-square rounded-circle me-3"
                          href="https://twitter.com/almehdiquran"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-md-square rounded-circle me-3"
                          href="https://www.instagram.com/almehdiquran"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          className="btn btn-md-square rounded-circle me-0"
                          href="https://www.linkedin.com/company/almehdiquran"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="footer-item">
                      <h4 className="text-white mb-4">Useful Links</h4>
                      <a href="/">
                        <i className="fas fa-angle-right me-2"></i> About Us
                      </a>
                      <a href="/courses">
                        <i className="fas fa-angle-right me-2"></i> Courses
                      </a>

                      <a href="/faqquestion">
                        <i className="fas fa-angle-right me-2"></i> FAQ
                      </a>

                      <a href="/contact">
                        <i className="fas fa-angle-right me-2"></i> Contact Us
                      </a>

                      <a href="/register">
                        <i className="fas fa-angle-right me-2"></i> Register
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="footer-item">
                      <h4 className="mb-4 text-white">PARENT COMMENTS</h4>
                      <p className="text-white mb-4">
                        Assalam u Alaikum, I admit, in the beginning I was in
                        doubt, but after few weeks, all I can say is you are
                        doing a great job, and we are very happy. Thank you very
                        much for providing our children the knowledge they need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="pt-5"
                style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
              >
                <div className="row g-0">
                  <div className="col-12">
                    <div className="row g-4">
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fas fa-map-marker-alt fa-2x"></i>
                          </div>
                          <div>
                            <h4 className="text-white">Address</h4>
                            <p className="mb-0 text-white">Punjab, Pakistan</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fas fa-envelope fa-2x"></i>
                          </div>
                          <div>
                            <h4 className="text-white">Mail Us</h4>
                            <p className="mb-0 text-white">
                              info@almehdiquran.com
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fa fa-phone-alt fa-2x"></i>
                          </div>
                          <div>
                            <h4 className="text-white">Telephone</h4>
                            <p className="mb-0 text-white">+92 345 1147272</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-end mb-md-0">
              <span class="text-white">
                <a href="/" className="border-bottom text-white">
                  <i className="fas fa-copyright text-white me-2"></i>Al Mehdi
                  Online Quran Academy
                </a>
                , All rights reserved &copy; {new Date().getFullYear()}
              </span>
            </div>
            <div className="col-md-6 text-center text-md-start text-white">
              <a
                className="border-bottom text-white"
                href="https://safarababs.github.io/safarweb/"
              >
                Designed By Safar Abbas
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
