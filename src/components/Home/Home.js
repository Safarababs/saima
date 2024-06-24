import React from "react";

const Header = () => {
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className="header home">
      <div className="container-fluid">
        <div className="hero row align-items-center">
          <div className="col-md-7">
            <p>Welcome To</p>
            <h2>
              <span>Al Mehdi Online Quran Academy</span>
            </h2>

            <p>We are offering online Quran learning at your door step</p>
            <a className="btn" href="/contact">
              {" "}
              Register Now!
            </a>
          </div>
          <div className="col-md-5">
            <div className="form">
              <h3>Get Register Now!</h3>
              <form onSubmit={handleClick}>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                />
                <div className="control-group">
                  <select defaultValue="" name="service">
                    <option value="" disabled hidden>
                      Select Course
                    </option>
                    <option value="1">Noorani Qaida</option>
                    <option value="2">Quran Memorisation</option>
                    <option value="3">Quran Tafseer</option>
                    <option value="4">Quran Mafaheem</option>
                    <option value="5">Nehjul Balagha</option>
                    <option value="6">Quran Tajweed</option>
                    <option value="7">Fiqh</option>
                    <option value="8">Sahifa Kamila</option>
                    <option value="9">Seerat-e-Masomeen</option>
                  </select>
                </div>
                <textarea
                  className="form-control"
                  placeholder="Your Message"
                  name="message"
                ></textarea>
                <button className="btn btn-block">Start Free Trial</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
