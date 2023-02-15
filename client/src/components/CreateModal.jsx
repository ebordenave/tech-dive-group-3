import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement(document.createElement('div'));

async function handleCreateClick() {
  await fetch('http://localhost:9000/exams/create/', {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
      },
      body: JSON.stringify({
          "exam": {
              "patientId": "AAA",
              "age": 5656,
              "sex": "F",
              "zipCode": "720",
              "bmi": 56.46,
              "__v": 0,
              "examId": "Exam-2",
              "keyFindings": "verv",
              "brixiaScores": "jhvbhj",
              "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_PORTABLE_2.png"
          }
      })
  }).then(response => response.json()).then(response => console.log(JSON.stringify(response)));
}

const CreateModal = ({ closeFn = () => null, open = false }) => {
  console.log("Create modal was hit");
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>Modal One</h1>
          </header>
          <div className="modal--body">
            <p>Modal One content will be rendered here.</p>
          </div>
          <footer className="modal--footer">
            <button type="button" onClick={closeFn}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default CreateModal;