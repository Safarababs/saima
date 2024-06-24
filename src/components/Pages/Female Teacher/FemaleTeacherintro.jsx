import React from "react";

const FeMaleTeacherIntro = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="img/Female Teacher.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <h1>
                  <span style={{ color: "#006DAF" }}>Female Quran</span>{" "}
                  Teachers
                </h1>
              </div>
              <p>
                Learn Noorani Qaida Online: This fundamental course is essential
                for learning the Quran and the basic rules of Tajweed. It
                includes the most crucial lessons for Quran recitation.
                Therefore, beginners who wish to start learning the Quran from
                scratch should enroll in this course to complete and master
                Noorani Qaida online. The Noorani Qaida comprises 25 lessons
                across 55 pages, designed for quick completion. This is why it
                is widely taught by teachers in both Arab and Non-Arab
                countries.
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

export default FeMaleTeacherIntro;
