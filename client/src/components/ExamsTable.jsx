import React from 'react';
import './ExamsTable.css';
import ExamTableRow from './ExamTableRow.jsx';
import ReactPaginate from 'react-paginate';

export default class ExamsTable extends React.Component {
  // Initialize state with exams and error
  state = {
    exams: null,
    error: null,
    currentPage: 0,
    itemsPerPage: 10,
  };
  

  handleDelete = (examId) => {
    this.setState(prevState => ({
      exams: prevState.exams.filter(exam => exam.examId !== examId)
    }));
  }
  
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
  
  handlePageClick = (data) => {
    this.setState({ currentPage: data.selected });
  };
  
  render() {
    const { exams, error, currentPage, itemsPerPage } = this.state;

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
    
    // Calculate the start and end indexes of the current page
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Get the exams for the current page
    const currentExams = exams && exams.slice(startIndex, endIndex);

    return (
      <div>
        <div>
          <div className='ExamsTable-container'>
            <table className="uk-table">
              <thead>
                <tr>
                  {isLoading ? (
                    <th>Loading...</th>
                  ) : (
                    // Render table headings
                    headings.map((h, index) => <th className="blue-header" key={index}>{h}</th>)
                  )}
                </tr>
              </thead>
              <tbody>
                {
                  currentExams && currentExams.map((exam,index) => (
                    <ExamTableRow key={index} index={startIndex + index + 1} exam={exam} onDelete={this.handleDelete} isOnAdminPage={this.props.isOnAdminPage} />

                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        {
          exams && (
            <ReactPaginate
              pageCount={Math.ceil(exams.length / itemsPerPage)}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          )
        }
      </div>
    );
  }
}
