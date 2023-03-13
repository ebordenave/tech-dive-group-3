import React, { useState } from 'react';
import './ExamForm.css';
import apiUrl from './ExamsTable';

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
      const response = await fetch(`${apiUrl}/exams/create/`, {
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
    <div>
      <div id='form-container'>
        <div id='div-bg'></div>
        <div id='form-section'>
          <form onSubmit={handleSubmit}>
            {successMsg && <div className="success-msg">{successMsg}</div>}
            {errorMsg && <div className="error-msg">{errorMsg}</div>}
            <br />
            <div className="form-group">
            <h4 style={{textAlign: 'center', fontFamily: 'Arial'}}>Create Exam</h4>
              <div className='form-field'>
                <input type="text" name="patientId" value={examData.patientId} onChange={handleChange} placeholder={'Patient ID'}/>
              </div>
              <br />
              <div className='form-field'>
                <input
                  type="number"
                  name="age"
                  value={examData.age}
                  onChange={handleChange}
                  placeholder={'Age'}
                />
              </div>
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
              <br />
              <br />
              <div className='form-field'>
              <input
                type="text"
                name="zipCode"
                value={examData.zipCode}
                onChange={handleChange}
                placeholder={'Zip Code'}
              />
              </div>
              <br />
              <div className='form-field'>
              <input
                type="number"
                name="bmi"
                value={examData.bmi}
                onChange={handleChange}
                placeholder={'Body Mass Index'}
              />
              </div>
              <br />
              <div className='form-field'>
              <input
                type="text"
                name="examId"
                value={examData.examId}
                onChange={handleChange}
                placeholder={'Exam ID'}
              />
              </div>
              <br />
              <textarea
                name="keyFindings"
                value={examData.keyFindings}
                onChange={handleChange}
                placeholder={'Key Findings'}
                style={{ height: '45px', width: '205px' }}
              />
              <br />
              <br />
              <div className='form-field'>
              <input
                type="text"
                name="brixiaScores"
                value={examData.brixiaScores}
                onChange={handleChange}
                placeholder={'Brixia Scores'}
              />
              </div>
              <br />
              <div className='form-field'>
              <input
                type="text"
                name="imageURL"
                value={examData.imageURL}
                onChange={handleChange}
                placeholder={'Image URL'}
              />
              </div>
              <br />
              <button class="bg-primary text-white" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
  

export default ExamForm;
