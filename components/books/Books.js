import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import SearchComponent from "../SearchComponent/SearchComponent";
import { Container, Title, BooksContainer } from "./BooksStyles";
import BookComponent from "../book/BookComponent";

const Books = () => {
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    async function fetchSheetData() {
      try {
        const response = await fetch("static/Homebooks.xlsx"); // Access the Excel file from the static directory
        const buffer = await response.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: "buffer" });

        // Assuming the first sheet of the workbook is the one you want to read
        const sheet = workbook.Sheets[workbook.SheetNames[0]];

        // Convert the sheet to an array of objects
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        setSheetData(jsonData);
      } catch (error) {
        console.error("Error reading Excel file:", error);
      }
    }

    fetchSheetData();
  }, []);

  const handleSearch = (value) => {
    console.log("Search value:", value);
  };

  return (
    <Container>
      <Title>Welcome To Home Books</Title>
      <SearchComponent placeholder="Search..." onSearch={handleSearch} />
      <BooksContainer>
        {sheetData.map(
          (col, index) =>
            col[4] && (
              <BookComponent
                title={col[4]}
                author={col[3]}
                pages={col[2]}
                image={col[6]}
                key={index}
              />
            )
        )}
      </BooksContainer>
    </Container>
  );
};

export default Books;
