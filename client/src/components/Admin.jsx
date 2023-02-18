import React from 'react';
import './Admin.css';
import ExamsTable from './ExamsTable';
import AdminController from './AdminController';


export default class Admin extends React.Component {
    render() {
        return [
            <div>
                <AdminController />
                <ExamsTable className="SideContent"/>
            </div>
        ];
    }
}