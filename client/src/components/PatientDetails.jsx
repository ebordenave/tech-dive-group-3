// import React from 'react';



// export default class PatientDetails extends React.Component {
//   state = {
//     patient: null,
//     error: null,
//   };

//   componentDidMount() {
//     fetch('http://localhost:9000/patient/')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         this.setState({ patient: data.patientId });
//       })
//       .catch(error => {
//         console.error('Error fetching patient:', error);
//       });
//   }
//   render() {
//     const { patient, error } = this.state;

//     const headings = [
//       "Patient ID", 
//       "Exam ID", 
//       "Image", 
//       "Key Findings", 
//       "Brixia Scores", 
//       "Age", 
//       "Sex", 
//       "BMI", 
//       "Zip" 
//     ];

//     if (error) {
//       return <div>Error: {error}</div>;
//     }

//     const isLoading = patient === null;

//     return (
//         <div>
//             <h1>Patient Details Page</h1>
//             <p>Patient ID: {patientId} </p>
//         </div>
//         );
//     }
// }
