import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <div className="border-end border-primary pe-3">
                  <a href="/" className="text-muted small">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    Online Quran
                  </a>
                </div>
                <div className="ps-3">
                  <a
                    href="mailto:info@almehdiquran.com"
                    className="text-muted small"
                  >
                    <i className="fas fa-envelope text-primary me-2"></i>
                    info@almehdiquran.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex justify-content-end">
                <div className="d-flex border-end border-primary pe-3">
                  <a
                    className="btn-square p-0 text-primary me-3"
                    href="https://www.facebook.com/profile.php?id=100091821242239"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn-square p-0 text-primary me-3"
                    href="https://twitter.com/almehdiquran"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    className="btn-square p-0 text-primary me-0"
                    href="https://www.linkedin.com/company/almehdiquran"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn-square p-0 text-primary me-0"
                    href="https://www.instagram.com/almehdiquran"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid header-2 nav-bar px-0 px-lg-4 py-lg-0">
        <div className="container">
          <nav className="nav navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand p-0">
              <img src="img/logo.png" alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-0 mx-lg-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="/courses"
                    className="nav-link dropdown-toggle"
                    id="coursesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Courses
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="coursesDropdown"
                  >
                    <li>
                      <Link to="/noraniQaida" className="dropdown-item">
                        Basic Quranic Qaida Course
                      </Link>
                    </li>
                    <li>
                      <Link to="/tajweed" className="dropdown-item">
                        Rules of Tajweed Course
                      </Link>
                    </li>
                    <li>
                      <Link to="/Translation" className="dropdown-item">
                        Quran Translation Course
                      </Link>
                    </li>
                    <li>
                      <Link to="/tafseer" className="dropdown-item">
                        Quran Tafseer Course
                      </Link>
                    </li>
                    <li>
                      <Link to="/hifz" className="dropdown-item">
                        Quran Memorisation Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/islamicstudy" className="dropdown-item">
                        Islamic Studies for Kids Course
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    id="teachersDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Teachers
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="teachersDropdown"
                  >
                    <li>
                      <Link to="/maleteacher" className="dropdown-item">
                        Male Quran Teachers
                      </Link>
                    </li>

                    <li>
                      <Link to="/femaleteacher" className="dropdown-item">
                        Female Quran Teachers
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="/fee" className="nav-item nav-link">
                  Fee
                </Link>
                <Link to="/register" className="nav-item nav-link">
                  How to Register
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Contact Us
                </Link>
                <Link to="/faqquestion" className="nav-item nav-link">
                  Faq's
                </Link>
                <Link to="/books" className="nav-item nav-link">
                  More
                </Link>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shrink-0 ps-4">
              <a
                href="tel:+923451147272"
                className=" btn-light btn-lg-square rounded-circle position-relative wow tada"
                data-wow-delay=".9s"
              >
                <i className="fa fa-phone-alt fa-2x"></i>
                <div
                  className="position-absolute"
                  style={{ top: "7px", right: "12px" }}
                >
                  <span>
                    <i className="fa fa-comment-dots text-secondary"></i>
                  </span>
                </div>
              </a>
              <div className="d-flex flex-column ms-3">
                <span>Call to Our Experts</span>
                <a href="tel:+923451147272">
                  <span className="text-dark">Free: +92 345 1147272</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
