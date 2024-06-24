import React from "react";

const Unigue = () => {
  return (
    <section style={{ backgroundColor: "#ccc" }}>
      <div class="container pt-5 pb-3">
        <div class="text-center mb-5">
          <h1>
            What makes us
            <span style={{ color: "#006DAF" }}> different </span>
            from others?
          </h1>
          <p>
            We at Al Mehdi Online Quran Academy made 100% sure to maintain
            education quality by hiring best of the best Male Quran Teachers.
            Here are few out of many prominent qualities, we would like to
            share.
          </p>
        </div>
      </div>

      <div className="TeacherQualityCards">
        <div className="card">
          <i className="fa fa-user"></i>
          <h1>Comparison of results</h1>

          <p>
            No matter what your age is. Everyone can apply for this course whose
            age is 5-70 years. Specially designed for kids having age five or
            greater than five years.
          </p>
        </div>

        <div className="card">
          <i className="fa fa-user"></i>
          <h1>Student monthly test report</h1>

          <p>
            No matter what your age is. Everyone can apply for this course whose
            age is 5-70 years. Specially designed for kids having age five or
            greater than five years.
          </p>
        </div>
        <div className="card">
          <i className="fa fa-user"></i>
          <h1>Monitoring system & schedule</h1>

          <p>
            No matter what your age is. Everyone can apply for this course whose
            age is 5-70 years. Specially designed for kids having age five or
            greater than five years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Unigue;
