import React from "react";

const Faq = () => {
  return (
    <>
      <div class="container-fluid faq-section bg-light py-5">
        <div class="container py-5">
          <div class="row g-5 align-items-center">
            <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div class="h-100">
                <div class="mb-5">
                  <h4 class="text-primary">Some Important FAQ's</h4>
                  <h1 class="display-4 mb-0">
                    Common Frequently Asked Questions
                  </h1>
                </div>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Q: How do online Quran classes work?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show active"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body rounded">
                        A: Online Quran classes at Almehdi Online Quran Academy
                        are conducted via live video sessions with qualified
                        teachers. Students can join from anywhere using a
                        computer or smartphone. Each session is interactive,
                        allowing students to recite Quranic verses, receive
                        feedback, and ask questions in real-time.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Q: What qualifications do your Quran teachers have?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        A: Our Quran teachers at Almehdi Online Quran Academy
                        are highly qualified and experienced in Tajweed (Quranic
                        recitation rules) and Islamic studies. They undergo
                        rigorous training and are chosen based on their
                        proficiency in teaching Quran to students of various
                        ages and backgrounds.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Q: Is there a specific age limit or requirement to join
                        the online Quran classes?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        A: No, there is no specific age limit to join our online
                        Quran classes. We cater to students of all ages, from
                        young children to adults. Our courses are designed to
                        accommodate beginners as well as those looking to deepen
                        their understanding and recitation skills of the Quran.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
              <img src="img/carousel-2.png" class="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
