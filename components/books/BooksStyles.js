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

export const StyledInput = styled.input`
  padding: 8px;
  width: 220px;
  border-radius: 5px;
  border: 1px solid #aaa;
  font-size: 0.9rem;
`;

export const StyledSelect = styled.select`
  padding: 8px;
  width: 160px;
  border-radius: 5px;
  border: 1px solid #aaa;
  font-size: 0.9rem;
  background-color: #fff;
  cursor: pointer;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* مسافة صغيرة بين العناصر */
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column; /* عند تصغير الشاشة يصبحان فوق بعض */
    gap: 8px;
  }
`;
