import React from "react";
import OwlCarousel from "react-owl-carousel";

const Home = () => {
  return (
    <div>
      <OwlCarousel
        className="header-carousel owl-carousel"
        loop
        margin={10}
        nav
        items={1}
        autoplay
        autoplayTimeout={5000}
        animateOut="fadeOut"
        animateIn="fadeIn"
      >
        <div className="header-carousel-item bg-primary">
          <div className="carousel-caption">
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-lg-7 animated fadeInLeft">
                  <div className="text-sm-center text-md-start">
                    <h4 className="text-white text-uppercase fw-bold mb-4">
                      Welcome To
                    </h4>
                    <h1 className="display-1 text-white mb-4">
                      Al Mehdi Online Quran Academy
                    </h1>
                    <p className="mb-5 fs-5">
                      World's #1 Online Shia Quran Academy For Our Shia
                      Community. One-On-One Quran Teacher, 24/7 Availability,
                      Trained Teachers and Money Back Guarantee.
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                      <a
                        className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                        href="/"
                      >
                        Register Now
                      </a>
                      <a
                        className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2"
                        href="/"
                      >
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 animated fadeInRight">
                  <div className="calrousel-img" style={{ objectFit: "cover" }}>
                    <img
                      src="img/home.png"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Home;
