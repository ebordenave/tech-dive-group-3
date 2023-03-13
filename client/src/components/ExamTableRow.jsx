import React from 'react';
import { Link } from "react-router-dom";

// added apiUrl from ExamsTable.jsx
import { apiUrl } from './ExamsTable'


export default class ExamTableRow extends React.Component {
  state = { showDeleteButton: false, loading: false }

  toggleDeleteButton = (show) => {
    this.setState({ showDeleteButton: show && this.props.isOnAdminPage });
  }

  handleDelete = () => {
    this.setState({ loading: true });
    fetch(`${apiUrl}/exams/${this.props.exam.examId}`, {
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
    const { exam, isOnAdminPage } = this.props;

    if (!exam) {
      console.log('Exam Table is Null')
      return null;
    }

    return (
      <tr key="main" onMouseEnter={() => this.toggleDeleteButton(true)} onMouseLeave={() => this.toggleDeleteButton(false)}>
        <td><Link to={`${apiUrl}/patient/${exam.patientId}`}>{exam.patientId}</Link></td>
        <td><Link to={`${apiUrl}/exams/${exam.examId}`}>{exam.examId}</Link></td>
        <td><img src={exam.imageURL} width={48} alt="avatar" /></td>
        <td>{exam.keyFindings}</td>
        <td>{exam.brixiaScores}</td>
        <td>{exam.age}</td>
        <td>{exam.sex}</td>
        <td>{exam.bmi}</td>
        <td>{exam.zipCode}</td>
        {isOnAdminPage && this.state.showDeleteButton && (
          <td>
            {this.state.loading ? (
              <div>Loading...</div>
            ) : (
              <button onClick={this.handleDelete}>Delete</button>
            )}
          </td>
        )}
      </tr>
    );
  }
}