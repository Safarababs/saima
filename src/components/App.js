import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Landing from "./Landing Page/Landing";
import AboutPage from "./Pages/About Page/About";
import TeacherPage from "./Pages/Teacher page/TeacherPage";
import CoursesPage from "./Pages/Courses";
import ContactPage from "./Pages/Contact Page/ContactPage";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/course" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/teachers" element={<TeacherPage />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
