import React from 'react';
import './ExamsTable.css';
import { apiUrl } from './ExamsTable'

export default class PatientDetailsTable extends React.Component {
  state = {
    patient: null,
    error: null,
  };

  componentDidMount() {
    fetch(`${apiUrl}/app/patient/${this.props.patientId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ patient: data.patientId });
      })
      .catch(error => {
        console.error('Error fetching patient:', error);
      });
  }
  render() {
    const { patient, error } = this.state;

    // const headings = [
    //   "Patient ID", 
    //   "Exam ID", 
    //   "Image", 
    //   "Key Findings", 
    //   "Brixia Scores", 
    //   "Age", 
    //   "Sex", 
    //   "BMI", 
    //   "Zip" 
    // ];

    if (error) {
      return <div>Error: {error}</div>;
    }

    const isLoading = patient === null;

    return (
        <div>
            <h1>Patient Details Page</h1>
            <p>Patient ID: {this.props.patientId} </p>
        </div>
        );
    }
}
