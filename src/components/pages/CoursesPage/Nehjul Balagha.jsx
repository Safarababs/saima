import React from "react";
import { Link } from "react-router-dom";

const NehjulBalaghaCourse = () => {
  return (
    <div className="coursesPage">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Nehjul Balagha Course</h1>
        <p>
          Explore the profound teachings and eloquent speeches of Imam Ali (a.s)
          through our interactive and comprehensive course.
        </p>

        <div className="breadcrumb-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Nehjul Balagha Course
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Course Display */}
      <div className="courseDisplay">
        <div className="course-image">
          <img
            className="img-fluid"
            src="img/nehjul-balagha-course.jpg"
            alt="Nehjul Balagha Course"
          />
        </div>
        <div className="courseContent">
          <h2>About Nehjul Balagha Course</h2>
          <p>
            The Nehjul Balagha Course provides a deep dive into the wisdom and
            eloquence of Imam Ali (a.s), as recorded in the esteemed text,
            Nehjul Balagha. This course is structured to study Imam Ali’s
            sermons, letters, and sayings, offering a comprehensive
            understanding of his teachings. Students will explore the
            philosophical, ethical, and spiritual dimensions of his words,
            enhancing their appreciation of his leadership and moral guidance.
            Suitable for all age groups, this course helps individuals connect
            with Islamic principles and historical context through the insights
            of Imam Ali.
          </p>
        </div>
      </div>

      {/* Course Structure */}
      <div className="card">
        <h2>Course Structure</h2>
        <ul>
          <li>
            <i className="fas fa-arrow-right"></i>
            <strong>Class Type:</strong> Group or One-on-One
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>
            <strong>Class Duration:</strong>30 minutes
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>
            <strong>Age Level:</strong> No Age Limit
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>
            <strong>Requirements:</strong> Basic understanding of Islamic
            teachings
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>
            <strong>Course Level:</strong> Intermediate to Advanced
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>
            <strong>Course Period:</strong> Flexible based on student's progress
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>
            <strong>Tutor:</strong> Expert in Islamic studies
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>
            <strong>Gender:</strong> Both Male/Female
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>
            <strong>Languages:</strong> Urdu / English
          </li>
        </ul>
      </div>

      {/* Why Nehjul Balagha Course */}
      <div className="card">
        <h2>Why Nehjul Balagha Course?</h2>
        <p>
          This course offers a valuable opportunity to explore the profound
          wisdom and eloquence of Imam Ali (a.s) as captured in Nehjul Balagha.
          It provides an in-depth study of his sermons, letters, and sayings,
          which are essential for understanding his leadership and moral
          teachings. The course is accessible to individuals of all ages, aiming
          to deepen the appreciation of Islamic values and historical context
          through Imam Ali's guidance.
        </p>
      </div>

      {/* What you will Learn */}
      <div className="card">
        <h2>What You Will Learn in This Course?</h2>
        <ul>
          <li>
            <i className="fas fa-arrow-right"></i>Detailed analysis of Imam
            Ali’s sermons and letters.
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>Understanding the historical
            and contextual background of Nehjul Balagha.
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>Insights into the ethical and
            philosophical teachings of Imam Ali (a.s).
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>Application of Imam Ali’s
            teachings to contemporary issues.
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>Enhanced appreciation of
            Islamic leadership and moral principles.
          </li>
        </ul>
      </div>

      {/* Nehjul Balagha Course Outline */}
      <div className="card">
        <h2>Nehjul Balagha Course Outline:</h2>
        <ul>
          <li>
            <i className="fas fa-arrow-right"></i>
            Introduction to Nehjul Balagha and its significance.
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>Study of Sermons: Themes and
            Historical Context.
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>Analysis of Letters: Political
            and Social Insights.
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>Examination of Sayings:
            Ethical and Moral Lessons.
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>Discussion of Imam Ali’s
            Leadership Qualities.
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>Case Studies: Application of
            Teachings to Modern Contexts.
          </li>
          <li>
            <i className="fas fa-arrow-right"></i>Interactive Discussions and
            Q&A Sessions.
          </li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="card">
        <h2>Why Choose Us for the Nehjul Balagha Course?</h2>
        <p>
          Our academy offers a meticulously designed Nehjul Balagha Course that
          combines in-depth study with interactive learning. We provide
          experienced instructors with a deep understanding of Imam Ali’s
          teachings and a commitment to fostering a thoughtful learning
          environment. Our flexible scheduling and personalized attention ensure
          that students of all ages receive a rich and rewarding educational
          experience.
        </p>
        <ul>
          <li>
            <i className="fas fa-check"></i>Expert tutors with profound
            knowledge of Nehjul Balagha.
          </li>
          <li>
            <i className="fas fa-check"></i>Flexible class timings to
            accommodate your schedule.
          </li>
          <li>
            <i className="fas fa-check"></i>Interactive and engaging teaching
            methods.
          </li>
          <li>
            <i className="fas fa-check"></i>Personalized attention to ensure
            comprehensive understanding.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NehjulBalaghaCourse;
