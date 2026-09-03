import React from "react";
import Courses from "../../Courses/Courses";
import { Link } from "react-router-dom";

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
              <Link to="/">Home</Link>
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
              <Link to="/noraniQaida">Basic Quranic Qaida Course</Link>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <Link to="/tajweed">Rules of tajweed Course</Link>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <Link to="/Translation">Quran Translation Course</Link>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <Link to="/tafseer">Quran Tafseer Course</Link>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <Link to="/hifz">Quran Memorisation Courses</Link>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <Link to="/islamicstudy">Islamic Studies for kids Course</Link>
            </li>
            <li>
              <i className="fas fa-star"></i>
              <Link to="/balagha">Nehjul Balagha course</Link>
            </li>
          </ul>
          <p>
            These courses are designed in the way that a student can learn and
            understand Quran directly with live teachers. Choose the one that
            best suits you and your kids and get equipped with the learning of
            Quran from professional and qualified Quran tutors.
          </p>
          <p>Build up a life long relationship with Quran.</p>
          <Link to="/contact" className="btn">
            Start Free Trial
          </Link>
        </div>
      </section>
      <Courses />
    </>
  );
};

export default CoursesPage;
