import React, { useState } from "react";
import Faq from "../../Faq/Faq";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    guardianName: "",
    gender: "",
    studentAge: "",
    spokenLanguage: "",
    email: "",
    phone: "",
    whatsapp: "",
    skypeId: "",
    country: "",
    city: "",
    course: "",
    classDays: "",
    classTime: "",
    tutorGender: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <div className="registration-page">
        <h1>Get Free Trial</h1>
        <ul className="info-list">
          <li>Please enter your contact information below.</li>
          <li>
            We will get back to you via Email or Phone for a trial session.
          </li>
          <li>
            If you like, you can call us or chat with us for more queries.
          </li>
          <li>Start your free evaluation class at the given time.</li>
          <li>
            If you are satisfied with your trial session, you will be registered
            as a regular student.
          </li>
        </ul>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Register Here for Free Trial Session</legend>

            <label htmlFor="studentName">Student Name *</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />

            <label htmlFor="guardianName">Guardian's Name</label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
            />

            <label>Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>

            <label htmlFor="studentAge">Student Age</label>
            <input
              type="number"
              id="studentAge"
              name="studentAge"
              value={formData.studentAge}
              onChange={handleChange}
            />

            <label htmlFor="spokenLanguage">Spoken Language</label>
            <input
              type="text"
              id="spokenLanguage"
              name="spokenLanguage"
              value={formData.spokenLanguage}
              onChange={handleChange}
            />

            <label htmlFor="email">Your Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Your Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="whatsapp">WhatsApp</label>
            <input
              type="text"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
            />

            <label htmlFor="skypeId">Skype ID (If already created)</label>
            <input
              type="text"
              id="skypeId"
              name="skypeId"
              value={formData.skypeId}
              onChange={handleChange}
            />

            <label htmlFor="country">Your Country *</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />

            <label htmlFor="city">Your City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />

            <label htmlFor="course">Select Course</label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
            />

            <label htmlFor="classDays">
              Select Class Days (Note: Sunday is Off)
            </label>
            <input
              type="text"
              id="classDays"
              name="classDays"
              value={formData.classDays}
              onChange={handleChange}
            />

            <label htmlFor="classTime">Select Class Time</label>
            <input
              type="text"
              id="classTime"
              name="classTime"
              value={formData.classTime}
              onChange={handleChange}
            />

            <label>Tutor Gender</label>
            <label>
              <input
                type="radio"
                name="tutorGender"
                value="Male"
                checked={formData.tutorGender === "Male"}
                onChange={handleChange}
              />
              Male Tutor
            </label>
            <label>
              <input
                type="radio"
                name="tutorGender"
                value="Female"
                checked={formData.tutorGender === "Female"}
                onChange={handleChange}
              />
              Female Tutor
            </label>
            <label>
              <input
                type="radio"
                name="tutorGender"
                value="Anyone"
                checked={formData.tutorGender === "Anyone"}
                onChange={handleChange}
              />
              Anyone
            </label>

            <label htmlFor="message">Your Message (If any)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <p className="note">
              Submitting your details indicates your agreement to our
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                {" "}
                Terms of Service
              </a>
              .
            </p>

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
      <Faq />
    </>
  );
};

export default RegistrationPage;
