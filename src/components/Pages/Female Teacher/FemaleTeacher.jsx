import React from "react";
import Motivate from "../Teacher page/Motivate";
import Banner from "../Teacher page/BannerOne";
import BannerTwo from "../Teacher page/BannerTwo";
import MaleAndFemale from "../Teacher page/MaleAndFemale";
import FemaleTeacherintro from "./FemaleTeacherintro";
import FeMaleTeacherQualities from "./FemaleTeacherQuality";

const FeMaleTeacher = () => {
  return (
    <>
      <div class="container-fluid page-header" style={{ marginBottom: "90px" }}>
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h3 class="display-4 text-white text-uppercase">Female Teachers</h3>
            <div class="d-inline-flex text-white">
              <p class="m-0 text-uppercase">
                <a class="text-white" href="/">
                  Home
                </a>
              </p>
              <i class="fa fa-angle-double-right pt-1 px-3"></i>
              <p class="m-0 text-uppercase">Female Teachers</p>
            </div>
          </div>
        </div>
      </div>
      <FemaleTeacherintro />
      <Motivate />
      <FeMaleTeacherQualities />
      <Banner />

      <BannerTwo />
      <MaleAndFemale />
    </>
  );
};

export default FeMaleTeacher;
