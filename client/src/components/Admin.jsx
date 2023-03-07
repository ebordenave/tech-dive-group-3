import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import ExamsTable from './ExamsTable';
import AdminController from './AdminController';


export default class Admin extends React.Component {
    render() {
        return (
            <div>
                <Link to="/exam-form">Create New Exam</Link>
                <ExamsTable className="SideContent"/>
            </div>
        );
    }
}
