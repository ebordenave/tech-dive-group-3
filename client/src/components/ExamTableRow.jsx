import React from 'react';
import { slideDown, slideUp } from '../anim';
import '../App.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function formatDate(str) {
  return str.substr(0, 10);
}

function capitalize(str) {
  return str.split(' ').map(s => {
    return s.charAt(0).toUpperCase() + s.substr(1);
  }).join(' ');
}


export default class ExamTableRow extends React.Component {
  state = { expanded: false }

  toggleExpander = (e) => {

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
    const { exam } = this.props;

    if (!exam) {
      console.log('Exam Table is Null')
      return null; //returns null if exam is null or undefined
    }
  
    return [
      <tr key="main" onClick={this.toggleExpander}>
        <td>{capitalize(exam.patientId)}</td>
        <td>{capitalize(exam.examId)}</td>
        <td><img src={exam.imageURL} width={48} alt="avatar" /></td>
        <td>{exam.keyFindings}</td>
        <td>{exam.brixiaScores}</td>
        <td>{exam.age}</td>
        <td>{exam.sex}</td>
        <td>{exam.bmi}</td>
        <td>{exam.zipCode}</td>
      </tr>,
      this.state.expanded && (
        <tr className="expandable" key="tr-expander">
          <td colSpan={6}>
            <div ref="expanderBody" className="inner">
              <div >
                <img  src={exam.imageURL} alt="avatar" />
              </div>
              <div >
                <p>
                  Info:<br/>
                  <i>
                    {exam.brixiaScores}<br/>
                    {exam.age}<br/>
                    {capitalize(exam.sex)}<br/>
                    {exam.bmi}<br/>
                    {exam.zipCode}
                  </i>
                </p>
              </div>
            <div>
              <button><Link to={`exam`}>Exam</Link></button>
            </div>
            </div>
          </td>
        </tr>
      )
    ];
  }
}
