// components/BookComponent.js
import React from "react";
import {
  BookContainer,
  BookImage,
  BookInfo,
  BookTitle,
  BookAuthor,
  BookPages,
  BookShelf,
} from "./BookComponentStyles";

const BookComponent = ({ title, author, pages, shelf, image }) => {
  return (
    <BookContainer>
      <BookImage src={image} alt={title} />
      <BookInfo>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <BookPages> صفحة {pages} </BookPages>
        <BookShelf>{shelf} الرف رقم</BookShelf>
      </BookInfo>
    </BookContainer>
  );
};

export default BookComponent;
