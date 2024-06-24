import React from "react";

function MaleAndFemale() {
  return (
    <div className="container">
      <div className="heading">
        Al Mehdi Online Quran Academy Offers Male and Female Quran Teachers
      </div>
      <div className="cards">
        <Card
          image="img/Male Teacher.webp"
          title="Male Quran Teachers"
          description="Expert male Quran teachers available."
        />
        <Card
          image="img/Female Teacher.jpg"
          title="Female Quran Teachers"
          description="Expert female Quran teachers available."
        />
      </div>
    </div>
  );
}

function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="/contact">Read More</a>
      </div>
    </div>
  );
}

export default MaleAndFemale;
