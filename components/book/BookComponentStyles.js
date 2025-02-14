import styled from "styled-components";

export const BookContainer = styled.div`
  /*display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  max-width: 250px;
  margin: 10px auto;*/
  width: 220px; /* عرض ثابت للكتاب */
  padding: 15px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BookImage = styled.img`
  /* max-width: 100%;
  height: 100%;*/
  width: 100%; /* تجعل الصورة تمتد داخل العنصر */
  height: 280px; /* ارتفاع ثابت */
  object-fit: cover; /* تمنع التشوه عن طريق قص الزائد */
  border-radius: 8px;
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

export const BookShelf = styled.p`
  color: #666;
  font-size: 12px;
`;

export const BookPages = styled.p`
  color: #888;
`;
