import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5"
        style={{ marginTop: "90px" }}
      >
        <div className="row pt-5">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h5
                  className=" text-uppercase mb-4 text-white"
                  style={{ letterSpacing: "5px" }}
                >
                  Get In Touch
                </h5>

                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+92 345 1147272
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>info@almehdiquran.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a className="btn btn-outline-light btn-square mr-2" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-light btn-square mr-2" href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-light btn-square" href="/">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h5
                  className="text-white text-uppercase mb-4"
                  style={{ letterSpacing: "5px" }}
                >
                  Quick Links
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" href="/home">
                    <i className="fa fa-angle-right mr-2"></i> Home
                  </a>
                  <a className="text-white mb-2" href="/about">
                    <i className="fa fa-angle-right mr-2"></i> About
                  </a>
                  <a className="text-white mb-2" href="/courses">
                    <i className="fa fa-angle-right mr-2"></i> Courses
                  </a>
                  <a className="text-white mb-2" href="/pricing">
                    <i className="fa fa-angle-right mr-2"></i> Fee Structure
                  </a>
                  <a className="text-white mb-2" href="/teachers">
                    <i className="fa fa-angle-right mr-2"></i>Teachers
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "5px" }}
            >
              Subscribe to Our Newsletter!
            </h5>
            <p>
              Stay informed with the latest news, special offers, and valuable
              insights from Al Mehdi Online Quran Academy. Join our community
              and receive exclusive updates directly in your inbox. Subscribe
              now to enrich your Quranic education journey with us!
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: "30px" }}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, 0.1) !important" }}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy;{" "}
              <a href="/" className="text-white" style={{ cursor: "pointer" }}>
                Al Mehdi Quran All Rights Reserved @ {new Date().getFullYear()}
              </a>
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a
                  className="nav-link text-white py-0"
                  href="/"
                  style={{ cursor: "pointer" }}
                >
                  Designed by Safar Abbas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Footer;
