import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { Container, Title, BooksContainer } from "./BooksStyles";
import BookComponent from "../book/BookComponent";

const Books = () => {
  const [sheetData, setSheetData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // حالة البحث
  const [sortOption, setSortOption] = useState(""); // حالة الترتيب

  useEffect(() => {
    async function fetchSheetData() {
      try {
        const response = await fetch("static/Homebooks.xlsx"); // تحميل ملف الإكسل
        const buffer = await response.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: "buffer" });

        // قراءة أول ورقة في الملف
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        setSheetData(jsonData);
      } catch (error) {
        console.error("Error reading Excel file:", error);
      }
    }

    fetchSheetData();
  }, []);

  // تحديث البحث
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // تحديث خيار الترتيب
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // تصفية الكتب بناءً على البحث
  const filteredBooks = sheetData.filter(
    (col) =>
      col[4] && // التأكد من أن اسم الكتاب موجود
      (col[4].toLowerCase().includes(searchQuery) || // البحث في اسم الكتاب
        (col[3] && col[3].toLowerCase().includes(searchQuery))) // البحث في اسم الكاتب
  );

  // ترتيب الكتب بناءً على الخيار المحدد
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOption === "title-asc") return a[4].localeCompare(b[4]); // اسم الكتاب تصاعدي
    if (sortOption === "title-desc") return b[4].localeCompare(a[4]); // اسم الكتاب تنازلي
    if (sortOption === "author-asc") return a[3]?.localeCompare(b[3]) || 0; // اسم الكاتب تصاعدي
    if (sortOption === "author-desc") return b[3]?.localeCompare(a[3]) || 0; // اسم الكاتب تنازلي
    if (sortOption === "pages-asc") return (a[2] || 0) - (b[2] || 0); // عدد الصفحات تصاعدي
    if (sortOption === "pages-desc") return (b[2] || 0) - (a[2] || 0); // عدد الصفحات تنازلي
    return 0;
  });

  return (
    <Container>
      <Title>📚 أهلًا بكم في مكتبتنا 📚 </Title>

      {/* مربع البحث */}
      <input
        type="text"
        placeholder="ابحث عن اسم الكتاب أو الكاتب..."
        value={searchQuery}
        onChange={handleSearch}
        style={{
          padding: "10px",
          margin: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/* قائمة الترتيب */}
      <select
        value={sortOption}
        onChange={handleSortChange}
        style={{
          margin: "20px",
          borderRadius: "5px",
          width: "40%",
          marginLeft: "55%",
        }}
      >
        <option value="">ترتيب حسب...</option>
        <option value="title-asc">اسم الكتاب (أ-ي)</option>
        <option value="title-desc">اسم الكتاب (ي-أ)</option>
        <option value="author-asc">اسم الكاتب (أ-ي)</option>
        <option value="author-desc">اسم الكاتب (ي-أ)</option>
        <option value="pages-asc">عدد الصفحات تصاعدي</option>
        <option value="pages-desc">عدد الصفحات تنازلي</option>
      </select>

      <BooksContainer>
        {sortedBooks.map(
          (col, index) =>
            col[4] && (
              <BookComponent
                title={col[4]}
                author={col[3]}
                pages={col[2]}
                shelf={col[5]}
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
