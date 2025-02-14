import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
`;

export const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  margin: auto;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  -webkit-background-clip: text;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  transition: transform 0.3s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`;
