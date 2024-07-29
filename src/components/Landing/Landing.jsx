import React from "react";
import Home from "../Home/Home";
import Feature from "../Feature/Feature";
import About from "../About/About";
import Faq from "../Faq/Faq";
import Testimonial from "../Testimonial/Testimonial";
import CoursesPage from "../pages/CoursesPage/CoursesPage";

const Landing = () => {
  return (
    <>
      <Home />
      <Feature />
      <About />
      <CoursesPage />

      <Faq />
      <Testimonial />
    </>
  );
};

export default Landing;
