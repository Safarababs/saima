import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Registration from "../Registration/Registration";
import Testimonial from "../Testimonial/Testimonial";
import Courses from "../Courses/Courses";

const Landing = () => {
  return (
    <>
      <Home />
      <About />
      <Courses />
      <Registration />
      <Testimonial />
    </>
  );
};

export default Landing;
