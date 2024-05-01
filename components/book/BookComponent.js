// components/BookComponent.js
import React from "react";
import {
  BookContainer,
  BookImage,
  BookInfo,
  BookTitle,
  BookAuthor,
  BookPages,
} from "./BookComponentStyles";

const BookComponent = ({ title, author, pages, image }) => {
  return (
    <BookContainer>
      <BookImage src={image} alt={title} />
      <BookInfo>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <BookPages>{pages} pages</BookPages>
      </BookInfo>
    </BookContainer>
  );
};

export default BookComponent;
