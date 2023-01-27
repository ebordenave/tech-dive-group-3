import React from 'react';
import '../App.css';
import PatientTableRow from './PatientTableRow.jsx';

export default class PatientsTable extends React.Component {
    state = { patients: null }
  
    componentDidMount() {
      fetch('https://randomuser.me/api/1.1/?results=15')
        .then(response => response.json())
        .then(data => { this.setState({patients: data.results}) });
    }
  
    render() {
      const { patients } = this.state;
      const isLoading = patients === null;
      return (
        <div className="patients-table">
          <div className="table-container">
            <div className="uk-overflow-auto">
              <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <thead>
                  <tr>
                    <th className="uk-table-shrink" />
                    <th className="uk-table-shrink" />
                    <th className="uk-table-shrink">Avatar</th>
                    <th>Fullname</th>
                    <th>City</th>
                    <th>Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading
                    ? <tr><td colSpan={6} className="uk-text-center"><em className="uk-text-muted">Loading...</em></td></tr>
                    : patients.map((patient, index) =>
                        <PatientTableRow key={index} index={index + 1} patient={patient}/>
                      )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
  

  // Derived from https://codesandbox.io/s/collapsible-table-rows-in-react-ybb28?file=/index.js