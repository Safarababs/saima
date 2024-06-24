import React from "react";
import MaleTeacherIntro from "./MaleTeacherinto";
import Motivate from "../Teacher page/Motivate";
import MaleTeacherQualities from "./MaleTeacherQuality";
import Banner from "../Teacher page/BannerOne";
import BannerTwo from "../Teacher page/BannerTwo";
import MaleAndFemale from "../Teacher page/MaleAndFemale";

const MaleTeacher = () => {
  return (
    <>
      <div class="container-fluid page-header" style={{ marginBottom: "90px" }}>
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h3 class="display-4 text-white text-uppercase">Male Teachers</h3>
            <div class="d-inline-flex text-white">
              <p class="m-0 text-uppercase">
                <a class="text-white" href="/">
                  Home
                </a>
              </p>
              <i class="fa fa-angle-double-right pt-1 px-3"></i>
              <p class="m-0 text-uppercase">Male Teachers</p>
            </div>
          </div>
        </div>
      </div>
      <MaleTeacherIntro />
      <Motivate />
      <MaleTeacherQualities />
      <Banner />

      <BannerTwo />
      <MaleAndFemale />
    </>
  );
};

export default MaleTeacher;
