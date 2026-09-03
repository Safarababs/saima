import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BookList = () => {
  const books = [
    {
      title: "My Quranic Qaida Urdu",
      url: "books/1.pdf",
      image: "img/book1.jpg",
    },
    {
      title: "Tajweed Shanasi",
      url: "books/2.pdf",
      image: "img/book2.jpg",
    },
    {
      title: "My Quranic Qaida English",
      url: "books/3.pdf",
      image: "img/book3.jpg",
    },
    {
      title: "Nehjul balagha",
      url: "books/balagha.pdf",
      image: "img/balagha.jpg",
    },
    {
      title: "Sahifa Kamila",
      url: "books/kamila.pdf",
      image: "img/kamila.jpg",
    },
    {
      title: "Mafatee ul Jinan",
      url: "books/mafatee.pdf",
      image: "img/Mafatee.jpg",
    },
    {
      title: "Saheefa Sajadia",
      url: "books/sajadia.pdf",
      image: "img/sajadia.jpg",
    },
    {
      title: "Tozee ul Masile ",
      url: "books/tozee-rehbar.pdf",
      image: "img/Tozee-Rahbar.jpg",
    },
    {
      title: "Tozee ul Masile",
      url: "books/tozee-sistani.pdf",
      image: "img/Tozee-Sistani.jpg",
    },
  ];

  return (
    <div className="book-list-container">
      <h2>Find Here Course PDF Books</h2>
      <div className="card-container">
        {books.map((book, index) => (
          <div key={index} className="card">
            <LazyLoadImage
              src={book.image}
              alt={`Cover of ${book.title}`}
              className="book-image"
            />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <a
                href={book.url}
                className="btn btn-primary"
                download={`${book.title}.pdf`}
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
