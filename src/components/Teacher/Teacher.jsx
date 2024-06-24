import React from "react";

const Teacher = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="img/team-2.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <h1>
                  <span style={{ color: "#006DAF" }}>Online Quran</span>{" "}
                  Teachers
                </h1>
              </div>
              <p>
                Are you eager to delve into the depths of Quranic knowledge and
                spiritual enlightenment worldwide? Discover a transformative
                journey with our esteemed Online Quran Teachers accessible
                across the globe. Whether you're embarking on a quest to Learn
                Quran Online for the first time or seeking to deepen your
                understanding, our platform offers unparalleled flexibility and
                tailored learning experiences. We understand the diverse demands
                of modern life and accommodate your schedule with customizable
                class timings. Join us to align your Quranic studies seamlessly
                with your lifestyle, wherever you are in the world.
              </p>

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

export default Teacher;
