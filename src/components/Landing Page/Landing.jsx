import React from "react";
import Home from "../Home/Home";
import Registration from "../Registration/Registration";
import Testimonial from "../Testimonial/Testimonial";
import Courses from "../Courses/Courses";
import Banner from "../Pages/Teacher page/BannerOne";
import Contact from "../Contact/Contact";
import Teacher from "../Teacher/Teacher";

const Landing = () => {
  return (
    <>
      <Home />
      <Courses />
      <Registration />
      <Testimonial />
      <Banner />
      <Teacher />
      <Contact />
    </>
  );
};

export default Landing;
