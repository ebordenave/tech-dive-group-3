import React from 'react';
import Modal from 'react-modal';
import Form from './Form';
import { useApi } from '../hooks/use-api';

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

export default function AdminController() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleCreateClick() {
        fetch('', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
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
            }
        }).then(response => response.json()).then(response => console.log(JSON.stringify(response)))
    }

    return (
        <div className='AdminController'>
            <button class="trigger" onClick={openModal}>Add</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={handleCreateClick()}>Create</button>
            </Modal>
            <button>Edit</button>
            <button>View</button>
            <button>Delete</button>
        </div>
    );
}