import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="container-fluid testimonial pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-4 mb-4">What Our Customers Are Saying</h1>
            <p className="mb-0">
              Our customers consistently praise Al Mehdi Online Quran Academy
              for its exceptional service and dedication to quality education.
              Many highlight the knowledgeable tutors, personalized learning
              experiences, and the convenience of flexible scheduling. The
              positive feedback reflects our commitment to fostering a
              supportive and effective online learning environment. ---
            </p>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="testimonial-item bg-light rounded">
              <div className="row g-0">
                <div className="col-4 col-lg-4 col-xl-3">
                  <div className="h-100">
                    <img
                      src="img/testimonial-1.jpg"
                      className="img-fluid h-100 rounded"
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-8 col-lg-8 col-xl-9">
                  <div className="d-flex flex-column my-auto text-start p-4">
                    <h4 className="text-dark mb-0">Client Name</h4>
                    <p className="mb-3">Profession</p>
                    <div className="d-flex text-primary mb-3">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim error molestiae aut modi corrupti fugit eaque rem
                      nulla incidunt temporibus quisquam,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded">
              <div className="row g-0">
                <div className="col-4 col-lg-4 col-xl-3">
                  <div className="h-100">
                    <img
                      src="img/testimonial-2.jpg"
                      className="img-fluid h-100 rounded"
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-8 col-lg-8 col-xl-9">
                  <div className="d-flex flex-column my-auto text-start p-4">
                    <h4 className="text-dark mb-0">Client Name</h4>
                    <p className="mb-3">Profession</p>
                    <div className="d-flex text-primary mb-3">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star text-body"></i>
                    </div>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim error molestiae aut modi corrupti fugit eaque rem
                      nulla incidunt temporibus quisquam,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded">
              <div className="row g-0">
                <div className="col-4 col-lg-4 col-xl-3">
                  <div className="h-100">
                    <img
                      src="img/testimonial-3.jpg"
                      className="img-fluid h-100 rounded"
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-8 col-lg-8 col-xl-9">
                  <div className="d-flex flex-column my-auto text-start p-4">
                    <h4 className="text-dark mb-0">Client Name</h4>
                    <p className="mb-3">Profession</p>
                    <div className="d-flex text-primary mb-3">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star text-body"></i>
                      <i className="fas fa-star text-body"></i>
                    </div>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim error molestiae aut modi corrupti fugit eaque rem
                      nulla incidunt temporibus quisquam,
                    </p>
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

export default Testimonial;
