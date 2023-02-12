import React from 'react';
import './ExamsTable.css';
import ExamTableRow from './ExamTableRow.jsx';

export default class ExamsTable extends React.Component {
    state = { exams: null }
  
    componentDidMount() {
      fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
        .then(response => response.json())
        .then(data => { this.setState({exams: data.exams}) });
    }
  
    render() {
      const { exams } = this.state;
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

      const isLoading = exams === null;
      return (
        <div>
          <div>
            <div>
              <table className="uk-table">
                <thead>
                  <tr>
                    { isLoading 
                      ? <p></p>
                      :
                      headings.map((h, index) => <th>{h}</th>)
                    }
                  </tr>
                </thead>
                <tbody>
                  {isLoading
                    ? <h1> Loading </h1>
                    : exams.map((exam, index) =>
                        <ExamTableRow key={index} index={index + 1} exam={exam}/>
                      )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
  

  // Derived from https://codesandbox.io/s/collapsible-table-rows-in-react-ybb28?file=/index.js