import styled from "styled-components";

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  max-width: 250px;
  margin: 10px auto;
`;

export const BookImage = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const BookInfo = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const BookTitle = styled.h3`
  margin: 5px 0;
`;

export const BookAuthor = styled.p`
  font-style: italic;
  color: #666;
`;

export const BookPages = styled.p`
  color: #888;
`;
