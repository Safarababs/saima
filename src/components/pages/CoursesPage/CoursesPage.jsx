import React from "react";
import Courses from "../../Courses/Courses";

const CoursesPage = () => {
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Our Featured Courses
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>

            <li className="breadcrumb-item active text-primary">Courses</li>
          </ol>
        </div>
      </div>
      <section className="courses">
        <h2>Featured Quran Courses</h2>
        <p>
          We have organized comprehensive Quran courses for kids and adults
          (male and females) with live Quran tutors.
        </p>
        <p>List of offered Quran courses:</p>
        <div className="coursescontainer">
          <ul>
            <li>
              <i className="fas fa-star"></i>
              <a href="noraniQaida">Basic Quranic Qaida Course</a>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <a href="tajweed">Rules of tajweed Course</a>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <a href="Translation">Quran Translation Course</a>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <a href="tafseer">Quran Tafseer Course</a>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <a href="hifz">Quran Memorisation Courses</a>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <a href="islamicstudy">Islamic Studies for kids Course</a>
            </li>
          </ul>
          <p>
            These courses are designed in the way that a student can learn and
            understand Quran directly with live teachers. Choose the one that
            best suits you and your kids and get equipped with the learning of
            Quran from professional and qualified Quran tutors.
          </p>
          <p>Build up a life long relationship with Quran.</p>
          <a href="/contact" className="btn">
            Start Free Trial
          </a>
        </div>
      </section>
      <Courses />
    </>
  );
};

export default CoursesPage;
