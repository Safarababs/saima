import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5
              className="text-uppercase mb-3"
              style={{ letterSpacing: "5px", color: "black" }}
            >
              Courses
            </h5>
            <h2 style={{ letterSpacing: "5px", color: "black" }}>
              Our Popular Courses
            </h2>
            <p className="mb-0">
              Explore our popular courses, designed to cater to diverse
              interests and skill levels. From foundational courses to advanced
              studies, each program is crafted to provide comprehensive
              knowledge and practical skills. Whether you're looking to enhance
              your professional expertise or pursue a personal passion, our
              courses offer a blend of theoretical insights and hands-on
              learning. Join our community of learners and embark on a rewarding
              educational journey with us. //{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#C8DCF5",
                  boxShadow: "1px solid black",
                }}
              >
                <LazyLoadImage
                  alt="contact developer"
                  src="img/course-1.jpg"
                  className="img-fluid"
                />

                <div className="p-4">
                  <Link
                    className="h5"
                    to="/noraniQaida"
                    style={{ color: "black" }}
                  >
                    Quranic Qaida
                  </Link>{" "}
                  <hr style={{ color: "black" }}></hr>
                  <p style={{ color: "black" }}>
                    The Quranic Qaida Course is a fundamental course designed to
                    help students master the basics of Quranic reading. Our
                    expert tutors.....
                  </p>
                  <Link
                    to="/noraniQaida"
                    className="btn"
                    style={{ width: "100%" }}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#C8DCF5",
                  boxShadow: "1px solid black",
                  color: "black",
                }}
              >
                <LazyLoadImage
                  className="img-fluid"
                  src="img/course-2.jpg"
                  alt=""
                />
                <div className="p-4">
                  <Link className="h5" to="/tajweed" style={{ color: "black" }}>
                    Tajweed al Quran
                  </Link>
                  <hr style={{ color: "black" }}></hr>
                  <p style={{ color: "black" }}>
                    The Tajweed Rules Course is an essential program designed to
                    enhance your Quranic recitation by focusing on the precise
                    application....
                  </p>
                  <Link to="/tajweed" className="btn" style={{ width: "100%" }}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#C8DCF5",
                  boxShadow: "1px solid black",
                  color: "black",
                }}
              >
                <LazyLoadImage
                  className="img-fluid"
                  src="img/course-3.jpg"
                  alt=""
                />
                <div className="p-4">
                  <Link
                    className="h5"
                    to="/Translation"
                    style={{ color: "black" }}
                  >
                    Quran Translation
                  </Link>
                  <hr style={{ color: "black" }}></hr>
                  <p style={{ color: "black" }}>
                    Our Quran Translation Course is designed to provide a deep
                    understanding of the meanings and interpretations of the
                    Holy Quran....
                  </p>
                  <Link
                    to="/Translation"
                    className="btn"
                    style={{ width: "100%" }}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#C8DCF5",
                  boxShadow: "1px solid black",
                  color: "black",
                }}
              >
                <LazyLoadImage
                  className="img-fluid"
                  src="img/course-4.jpg"
                  alt=""
                />
                <div className="p-4">
                  <Link className="h5" to="/tafseer" style={{ color: "black" }}>
                    Quran Tafseer
                  </Link>
                  <hr style={{ color: "black" }}></hr>
                  <p style={{ color: "black" }}>
                    Our Quran Tafseer Course offers an in-depth exploration of
                    the meanings and interpretations of the Quranic text. This
                    course is...
                  </p>
                  <Link to="/tafseer" className="btn" style={{ width: "100%" }}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#C8DCF5",
                  boxShadow: "1px solid black",
                  color: "black",
                }}
              >
                <LazyLoadImage
                  className="img-fluid"
                  src="img/course-5.jpg"
                  alt=""
                />
                <div className="p-4">
                  <Link className="h5" to="/hifz" style={{ color: "black" }}>
                    Quran Memorisation
                  </Link>
                  <hr style={{ color: "black" }}></hr>
                  <p style={{ color: "black" }}>
                    Our Quran Memorisation Course is designed to help students
                    of all ages achieve the goal of memorizing the entire
                    Quran....
                  </p>
                  <Link to="/hifz" className="btn" style={{ width: "100%" }}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#C8DCF5",
                  boxShadow: "1px solid black",
                  color: "black",
                }}
              >
                <LazyLoadImage
                  className="img-fluid"
                  src="img/course-6.jpg"
                  alt=""
                />
                <div className="p-4">
                  <Link
                    className="h5"
                    to="/islamicstudy"
                    style={{ color: "black" }}
                  >
                    Shia Islamic Studies
                  </Link>
                  <hr style={{ color: "black" }}></hr>
                  <p style={{ color: "black" }}>
                    Our Islamic Studies for Kids Course is designed to provide
                    young learners with a solid foundation in Islamic principles
                    and values....
                  </p>
                  <Link
                    to="/islamicstudy"
                    className="btn"
                    style={{ width: "100%" }}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#C8DCF5",
                  boxShadow: "1px solid black",
                  color: "black",
                }}
              >
                <LazyLoadImage
                  className="img-fluid"
                  src="img/nehjul-balagha-course.jpg"
                  alt=""
                />
                <div className="p-4">
                  <Link
                    className="h5"
                    to="/islamicstudy"
                    style={{ color: "black" }}
                  >
                    Nehjul Balagha Course
                  </Link>
                  <hr style={{ color: "black" }}></hr>
                  <p style={{ color: "black" }}>
                    The Nehjul Balagha Course provides a deep dive into the
                    wisdom and eloquence of Imam Ali (a.s), as recorded....
                  </p>
                  <Link to="/balagha" className="btn" style={{ width: "100%" }}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
