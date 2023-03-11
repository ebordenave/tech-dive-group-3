import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import ExamsTable from './ExamsTable';

export default class Admin extends React.Component {
  render() {
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <br></br>
                    <button className="create-exam-btn" onClick={() => window.location.href='/app/exam-form'}>
                        Create New Exam
                    </button>
                    <p></p>
            </div>
        <ExamsTable className="SideContent" />
        </div>
    );
  }
}
