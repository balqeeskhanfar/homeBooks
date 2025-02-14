// pages/api/fetchExcelFile.js
import axios from "axios";
import * as XLSX from "xlsx";

export default async (req, res) => {
  try {
    const response = await axios.get(
      "https://1drv.ms/x/s!Aki4UxF46a06g5ULWB6ay-J0MUEZ1Q?e=evdiso",
      {
        responseType: "arraybuffer",
      }
    );

    const workbook = XLSX.read(response.data, { type: "buffer" });

    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    res.status(200).json(jsonData);
  } catch (error) {
    console.error("Error fetching Excel file:", error);
    res.status(500).json({ error: "Error fetching Excel file" });
  }
};
