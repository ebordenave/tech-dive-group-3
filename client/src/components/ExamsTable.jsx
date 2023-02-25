import React, { useState, useEffect } from "react";
import "./ExamsTable.css";
import ExamTableRow from "./ExamTableRow";

const ExamsTable = () => {
  const [exams, setExams] = useState(null);

  useEffect(() => {
    fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams")
      .then((response) => response.json())
      .then((data) => setExams(data.exams));
  }, []);

  const headings = [
    "Patient ID",
    "Exam ID",
    "Image",
    "Key Findings",
    "Brixia Scores",
    "Age",
    "Sex",
    "BMI",
    "Zip",
  ];

  const isLoading = exams === null;

  return (
    <div className="table-container">
      <table className="exams-table">
        <thead>
          <tr>
            {isLoading ? (
              <th>Loading</th>
            ) : (
              headings.map((h, index) => <th key={index}>{h}</th>)
            )}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td>Loading</td>
            </tr>
          ) : (
            exams.map((exam, index) => (
              <ExamTableRow key={index} index={index + 1} exam={exam} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExamsTable;
