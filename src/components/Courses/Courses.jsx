import React from "react";

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
                  backgroundColor: "#ccc",
                  boxShadow: "1px solid black",
                }}
              >
                <img className="img-fluid" src="img/course-1.jpg" alt="" />
                <div className="p-4">
                  <a
                    className="h5"
                    href="/noraniQaida"
                    style={{ color: "Black" }}
                  >
                    Quranic Qaida
                  </a>
                  <p style={{ color: "black" }}>
                    The Quranic Qaida Course is a fundamental course designed to
                    help students master the basics of Quranic reading. Our
                    expert tutors.....
                  </p>
                  <a
                    href="/noraniQaida"
                    className="btn"
                    style={{ width: "100%" }}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#ccc",
                  boxShadow: "1px solid black",
                }}
              >
                <img className="img-fluid" src="img/course-2.jpg" alt="" />
                <div className="p-4">
                  <a className="h5" href="/tajweed" style={{ color: "Black" }}>
                    Tajweed al Quran
                  </a>
                  <p style={{ color: "black" }}>
                    The Tajweed Rules Course is an essential program designed to
                    enhance your Quranic recitation by focusing on the precise
                    application....
                  </p>
                  <a href="/tajweed" className="btn" style={{ width: "100%" }}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#ccc",
                  boxShadow: "1px solid black",
                }}
              >
                <img className="img-fluid" src="img/course-3.jpg" alt="" />
                <div className="p-4">
                  <a
                    className="h5"
                    href="/Translation"
                    style={{ color: "Black" }}
                  >
                    Quran Translation
                  </a>
                  <p style={{ color: "black" }}>
                    Our Quran Translation Course is designed to provide a deep
                    understanding of the meanings and interpretations of the
                    Holy Quran....
                  </p>
                  <a
                    href="/Translation"
                    className="btn"
                    style={{ width: "100%" }}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#ccc",
                  boxShadow: "1px solid black",
                }}
              >
                <img className="img-fluid" src="img/course-4.jpg" alt="" />
                <div className="p-4">
                  <a className="h5" href="/tafseer" style={{ color: "Black" }}>
                    Quran Tafseer
                  </a>
                  <p style={{ color: "black" }}>
                    Our Quran Tafseer Course offers an in-depth exploration of
                    the meanings and interpretations of the Quranic text. This
                    course is...
                  </p>
                  <a href="/tafseer" className="btn" style={{ width: "100%" }}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#ccc",
                  boxShadow: "1px solid black",
                }}
              >
                <img className="img-fluid" src="img/course-5.jpg" alt="" />
                <div className="p-4">
                  <a className="h5" href="/hifz" style={{ color: "Black" }}>
                    Quran Memorisation
                  </a>
                  <p style={{ color: "black" }}>
                    Our Quran Memorisation Course is designed to help students
                    of all ages achieve the goal of memorizing the entire
                    Quran....
                  </p>
                  <a href="/hifz" className="btn" style={{ width: "100%" }}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div
                className="rounded overflow-hidden mb-2"
                style={{
                  backgroundColor: "#ccc",
                  boxShadow: "1px solid black",
                }}
              >
                <img className="img-fluid" src="img/course-6.jpg" alt="" />
                <div className="p-4">
                  <a
                    className="h5"
                    href="/islamicstudy"
                    style={{ color: "Black" }}
                  >
                    Shia Islamic Studies
                  </a>
                  <p style={{ color: "black" }}>
                    Our Islamic Studies for Kids Course is designed to provide
                    young learners with a solid foundation in Islamic principles
                    and values....
                  </p>
                  <a
                    href="/islamicstudy"
                    className="btn"
                    style={{ width: "100%" }}
                  >
                    Read more
                  </a>
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
