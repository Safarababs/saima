import React from "react";
import Teacher from "../../Teacher/Teacher";
import Registration from "../../Registration/Registration";

const TeacherPage = () => {
  return (
    <>
      <div class="container-fluid page-header" style={{ marginBottom: "90px" }}>
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h3 class="display-4 text-white text-uppercase">Teachers</h3>
            <div class="d-inline-flex text-white">
              <p class="m-0 text-uppercase">
                <a class="text-white" href="/">
                  Home
                </a>
              </p>
              <i class="fa fa-angle-double-right pt-1 px-3"></i>
              <p class="m-0 text-uppercase">Teachers</p>
            </div>
          </div>
        </div>
      </div>
      <Teacher />
      <Registration />
    </>
  );
};

export default TeacherPage;
