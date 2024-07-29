import React from "react";

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
    // Add more books as needed
  ];

  return (
    <div className="book-list-container">
      <h2>Find Here Course PDF Books</h2>
      <div className="card-container">
        {books.map((book, index) => (
          <div key={index} className="card">
            <img
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
