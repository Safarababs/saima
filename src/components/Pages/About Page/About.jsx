import React from "react";
import AboutHeader from "./AboutHeader";
import Registration from "../../Registration/Registration";
import Testimonial from "../../Testimonial/Testimonial";
import About from "../../About/About";

const AboutPage = () => {
  return (
    <>
      <AboutHeader />
      <About />
      <Registration />
      <Testimonial />
    </>
  );
};

export default AboutPage;
