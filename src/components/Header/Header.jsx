import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [sideMenuContent, setSideMenuContent] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setSideMenuContent(null); // Close side menu when main menu toggles
  };

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const openSideMenu = (menuContent) => {
    setSideMenuContent(menuContent);
    setIsMenuOpen(false); // Close main menu when opening side menu
  };

  const closeSideMenu = () => {
    setSideMenuContent(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setSideMenuContent(null); // Close side menu when closing main menu
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#menu") &&
        !event.target.closest(".navbar") &&
        !event.target.closest(".side-menu")
      ) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      closeMenu();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src="img/logo.png" alt="Logo" />{" "}
          </Link>
        </div>
        <div
          id="menu"
          className={`fas fa-bars ${isMenuOpen ? "fa-times" : ""}`}
          onClick={toggleMenu}
        ></div>

        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className="nav-item nav-link active"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li
              className={`dropdown ${activeDropdown === 0 ? "active" : ""}`}
              onClick={() => toggleDropdown(0)}
            >
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                onClick={() =>
                  openSideMenu(
                    <ul>
                      <li>
                        <Link
                          to="/noraniQaida"
                          className="dropdown-item"
                          onClick={closeMenu}
                        >
                          Basic Quranic Qaida Course
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/tajweed"
                          className="dropdown-item"
                          onClick={closeMenu}
                        >
                          Rules of Tajweed Course
                        </Link>
                      </li>
                      {/* Add other links here */}
                    </ul>
                  )
                }
              >
                Courses
              </Link>
            </li>
            <li
              className={`dropdown ${activeDropdown === 1 ? "active" : ""}`}
              onClick={() => toggleDropdown(1)}
            >
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                onClick={() =>
                  openSideMenu(
                    <ul>
                      <li>
                        <Link
                          to="/maleteacher"
                          className="dropdown-item"
                          onClick={closeMenu}
                        >
                          Male Quran Teachers
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/femaleteacher"
                          className="dropdown-item"
                          onClick={closeMenu}
                        >
                          Female Quran Teachers
                        </Link>
                      </li>
                      {/* Add other links here */}
                    </ul>
                  )
                }
              >
                Teachers
              </Link>
            </li>
            <li>
              <Link to="/fee" className="nav-item nav-link" onClick={closeMenu}>
                Fee
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="nav-item nav-link"
                onClick={closeMenu}
              >
                How to Register
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-item nav-link"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/faqquestion"
                className="nav-item nav-link"
                onClick={closeMenu}
              >
                Faq's
              </Link>
            </li>
            <li>
              <Link
                to="/books"
                className="nav-item nav-link"
                onClick={closeMenu}
              >
                Books
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {sideMenuContent && (
        <div className="side-menu active">
          <button onClick={closeSideMenu} className="close-btn">
            X
          </button>
          {sideMenuContent}
        </div>
      )}
    </header>
  );
}

export default Header;
