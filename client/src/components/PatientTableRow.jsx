import React from 'react';
import { slideDown, slideUp } from '../anim';
import '../App.css';


function formatDate(str) {
  return str.substr(0, 10);
}

function capitalize(str) {
  return str.split(' ').map(s => {
    return s.charAt(0).toUpperCase() + s.substr(1);
  }).join(' ');
}


export default class PatientTableRow extends React.Component {
  state = { expanded: false }

  toggleExpander = (e) => {
    if (e.target.type === 'checkbox') return;

    if (!this.state.expanded) {
      this.setState(
        { expanded: true },
        () => {
          if (this.refs.expanderBody) {
            slideDown(this.refs.expanderBody);
          }
        }
      );
    } else {
      slideUp(this.refs.expanderBody, {
        onComplete: () => { this.setState({ expanded: false }); }
      });
    }
  }

  render() {
    const { patient } = this.props;
    return [
      <tr key="main" onClick={this.toggleExpander}>
        {/* <td><input className="uk-checkbox" type="checkbox" /></td> */}
        {/* <td className="uk-text-nowrap">{this.props.index}.</td> */}
        <td><img className="uk-preserve-width uk-border-circle" src={patient.picture.thumbnail} width={48} alt="avatar" /></td>
        <td>{capitalize(patient.name.first + ' ' + patient.name.last)}<br /><small>{patient.email}</small></td>
        <td>{capitalize(patient.location.city)} ({patient.nat})</td>
        <td>{formatDate(patient.registered)}</td>
      </tr>,
      this.state.expanded && (
        <tr className="expandable" key="tr-expander">
          <td className="uk-background-muted" colSpan={6}>
            <div ref="expanderBody" className="inner uk-grid">
              <div >
                <img  src={patient.picture.large} alt="avatar" />
              </div>
              <div >
                <h3>{capitalize(patient.name.first + ' ' + patient.name.last)}</h3>
                <p>
                  Address:<br/>
                  <i>
                    {capitalize(patient.location.street)}<br/>
                    {patient.location.postcode} {capitalize(patient.location.city)}<br/>
                    {patient.nat}
                  </i>
                </p>
                <p>
                  E-mail: {patient.email}<br/>
                  Phone: {patient.phone}
                </p>
                <p>Date of birth: {formatDate(patient.dob)}</p>
              </div>
            </div>
          </td>
        </tr>
      )
    ];
  }
}
