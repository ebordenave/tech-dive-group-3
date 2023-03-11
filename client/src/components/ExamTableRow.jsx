import React from 'react';
import { slideDown, slideUp } from '../anim';
import '../App.css';
import { Link } from "react-router-dom";

function formatDate(str) {
  return str.substr(0, 10);
}

function capitalize(str) {
  return str.split(' ').map(s => {
    return s.charAt(0).toUpperCase() + s.substr(1);
  }).join(' ');
}

export default class ExamTableRow extends React.Component {
  state = { expanded: false, showDeleteButton: false, loading: false }

  toggleDeleteButton = (show) => {
    this.setState({ showDeleteButton: show });
  }
  
  handleDelete = () => {
    this.setState({ loading: true });
    fetch(`http://localhost:9000/exams/${this.props.exam.examId}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Exam deleted:', data);
      this.props.onDelete(this.props.exam.examId);
      this.setState({ loading: false });
    })
    .catch(error => {
      console.error('Error deleting exam:', error);
      this.setState({ loading: false });
    });
  }
  

  render() {
    const { exam } = this.props;
  
    if (!exam) {
      console.log('Exam Table is Null')
      return null;
    }
  
    return [
      <tr key="main" onMouseEnter={() => this.toggleDeleteButton(true)} onMouseLeave={() => this.toggleDeleteButton(false)}>
        <td><Link to={`http://localhost:9000/patient/${exam.patientId}`}>{exam.patientId}</Link></td>
        <td><Link to={`http://localhost:9000/exams/${exam.examId}`}>{exam.examId}</Link></td>
        <td><img src={exam.imageURL} width={48} alt="avatar" /></td>
        <td>{exam.keyFindings}</td>
        <td>{exam.brixiaScores}</td>
        <td>{exam.age}</td>
        <td>{exam.sex}</td>
        <td>{exam.bmi}</td>
        <td>{exam.zipCode}</td>
        {this.state.showDeleteButton && (
          <td>
            {this.state.loading ? (
              <div>Loading...</div>
            ) : (
              <button onClick={this.handleDelete}>Delete</button>
            )}
          </td>
        )}
      </tr>,
      this.state.expanded && (  
        <tr className="expandable" key="tr-expander">
          <td colSpan={6}>
            <div ref="expanderBody" className="inner">
              <div >
              <img src={exam.imageURL} alt="avatar" style={{ width: '200px', height: '200px' }} />
              </div>
              <div >
                <p>
                  Info:<br/>
                  <i>
                    {exam.brixiaScores}<br/>
                    {exam.age}<br/>
                    {capitalize(exam.sex)}<br/>
                    {exam.bmi}<br/>
                    {exam.zipCode}
                  </i>
                </p>
              </div>
              <div>
                {this.state.showDeleteButton && (
                  <button onClick={this.handleDeleteClick}>Delete</button>
                )}
                <button><Link to={`http://localhost:9000/exams/${exam.examId}`}>Exam</Link></button>
              </div>
            </div>
          </td>
        </tr>
      )
    ];
  }
}
      
      