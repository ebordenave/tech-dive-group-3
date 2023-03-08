import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import ExamsTable from './ExamsTable';


export default class Admin extends React.Component {
    render() {
        return (
            <div>
                <Link to="/app/exam-form">Create New Exam</Link>
                <ExamsTable className="SideContent"/>
            </div>
        );
    }
}
