import React, { useState } from 'react';

function ExamForm() {
  // initialize state with all form fields as empty strings
  const [examData, setExamData] = useState({
    patientId: '',
    age: '',
    sex: '',
    zipCode: '',
    bmi: '',
    examId: '',
    keyFindings: '',
    brixiaScores: '',
    imageURL: '',
  });
  
  // initialize state for success and error messages
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // event handler to update state when a form field value changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setExamData({ ...examData, [name]: value });
  };

  // event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // check if all fields have been filled out
    const allFieldsFilled = Object.values(examData).every(value => value !== '');
    if (!allFieldsFilled) {
      alert('Please fill in all fields before submitting the form.');
      return;
    }

    const examIdlower = examData.examId.toLowerCase();

    try {
      // send form data to the server using the fetch API
      const response = await fetch('http://localhost:9000/exams/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...examData, examId:examIdlower}),
      });

      // log the response data to the console
      const data = await response.json();
      console.log(data);

      // display success message and clear form fields
      alert('Exam created successfully!');
      setExamData({
        patientId: '',
        age: '',
        sex: '',
        zipCode: '',
        bmi: '',
        examId: '',
        keyFindings: '',
        brixiaScores: '',
        imageURL: '',
      });
    } catch (error) {
      // display error message
      console.error(error);
      setErrorMsg('Failed to create exam');
    }
  };

  // render the form
  return (
    <form onSubmit={handleSubmit}>
      {successMsg && <div className="success-msg">{successMsg}</div>}
      {errorMsg && <div className="error-msg">{errorMsg}</div>}
      <label>
        Patient ID:
        <br />
        <input
          type="text"
          name="patientId"
          value={examData.patientId}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <br />
        <input
          type="number"
          name="age"
          value={examData.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Sex:
        <br />
        <select
          name="sex"
          value={examData.sex}
          onChange={handleChange}
        >
          <option value="">Select sex</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Zip Code:
        <br />
        <input
          type="text"
          name="zipCode"
          value={examData.zipCode}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        BMI :
        <br />
        <input
          type="number"
          name="bmi"
          value={examData.bmi}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Exam ID:
        <br />
        <input
          type="text"
          name="examId"
          value={examData.examId}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Key Findings:
        <br />
        <textarea
          name="keyFindings"
          value={examData.keyFindings}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Brixia Scores:
        <br />
        <input
          type="text"
          name="brixiaScores"
          value={examData.brixiaScores}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image URL:
        <br />
        <input
          type="text"
          name="imageURL"
          value={examData.imageURL}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExamForm;
