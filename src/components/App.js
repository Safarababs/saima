import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import Tajweed from "./pages/CoursesPage/Tajweed";
import QuranTranslation from "./pages/CoursesPage/translation";
import QuranTafseer from "./pages/CoursesPage/QuranTafseer";
import QuranMemorisation from "./pages/CoursesPage/QuranMemorisation";
import IslamicStudiesForKids from "./pages/CoursesPage/IslamicStudy";
import MaleTeacher from "./pages/Teacher/MaleTeacher";
import FemaleTeacher from "./pages/Teacher/FemaleTeacher";
import PricingCards from "./pages/Fee/Fee";
import RegistrationPage from "./pages/Register/Register";
import TermsOfService from "./pages/Terms of Service/TermsOfService";
import ContactUs from "./pages/Contact/Contact";
import FAQQuestion from "./pages/Faq Question/FaqQuestion";
import BookList from "./Books/BookList";
import Header from "./Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/tajweed" element={<Tajweed />} />
        <Route path="/Translation" element={<QuranTranslation />} />
        <Route path="/tafseer" element={<QuranTafseer />} />
        <Route path="/hifz" element={<QuranMemorisation />} />
        <Route path="/islamicstudy" element={<IslamicStudiesForKids />} />
        <Route path="/maleteacher" element={<MaleTeacher />} />
        <Route path="/femaleteacher" element={<FemaleTeacher />} />
        <Route path="/fee" element={<PricingCards />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqquestion" element={<FAQQuestion />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
