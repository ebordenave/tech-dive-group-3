import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import ExamsTable from './ExamsTable';

export default class Admin extends React.Component {
  state = {
    isOnAdminPage: false,
  };

  componentDidMount() {
    const currentUrl = window.location.href;
    const isAdminPage = currentUrl.endsWith('/app/admin');
    this.setState({ isOnAdminPage: isAdminPage });
  }

  render() {
    const { isOnAdminPage } = this.state;

    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <br />
          <button className="create-exam-btn" onClick={() => window.location.href='/app/exam-form'}>
            Create New Exam
          </button>
          <p></p>
        </div>
        <ExamsTable className="SideContent" isOnAdminPage={isOnAdminPage} />
      </div>
    );
  }
}
