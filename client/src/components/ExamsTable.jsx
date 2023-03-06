import React from 'react';
import './ExamsTable.css';
import ExamTableRow from './ExamTableRow.jsx';

export default class ExamsTable extends React.Component {
  // Initialize state with exams and error
  state = {
    exams: null,
    error: null,
  };
  
  componentDidMount() {
    // Fetch data from the server and set state with response data
    fetch('http://localhost:9000/exams/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ exams: data.exams });
      })
      .catch(error => {
        console.error('Error fetching exams:', error);
      });
  }
  
  render() {
    const { exams, error } = this.state;

    // Define table headings
    const headings = [
      "Patient ID", 
      "Exam ID", 
      "Image", 
      "Key Findings", 
      "Brixia Scores", 
      "Age", 
      "Sex", 
      "BMI", 
      "Zip" 
    ];

    // If there's an error, display an error message
    if (error) {
      return <div>Error: {error}</div>;
    }

    // If exams are not loaded yet, display a loading message
    const isLoading = exams === null;
    return (
      <div>
        <div>
          <div>
            <table className="uk-table">
              <thead>
                <tr>
                  {isLoading ? (
                    <th>Loading...</th>
                  ) : (
                    // Render table headings
                    headings.map((h, index) => <th key={index}>{h}</th>)
                  )}
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                ) : (
                  // Render table rows for each exam
                  exams.map((exam, index) => (
                    <ExamTableRow key={index} index={index + 1} exam={exam} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

// Derived from https://codesandbox.io/s/collapsible-table-rows-in-react-ybb28?file=/index.js
