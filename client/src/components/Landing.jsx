import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: "none",
    color: '#333'
  };

export default class Landing extends React.Component {

    render() {
        return [
            <section>
                <div class="circle"></div>
                <header>
                    <a href="#" class="logo"><img src="favicon.png" /></a>
                    <ul>
                        <li><Link to="/" style={linkStyle}>Home</Link></li>
                        <li><Link to="app/non" style={linkStyle}>Main</Link></li>
                        <li><Link to="app/admin" style={linkStyle}>Admin</Link></li>
                        <li><Link to="app/exam" style={linkStyle}>Detail</Link></li>
                        <li><Link to="/" style={linkStyle}>About</Link></li>
                    </ul>
                </header>
                <div class="content">
                    <div class="textBox">
                        <h2>Doctor<br /><span>Database</span></h2>
                        <p>A web application that allows doctors to Create, Read, Update, and Delete (CRUD) structured radiology reports as an assessment of x-ray images for exams of patients with COVID-19!
                        </p>
                        <a href="#">Sign In</a>
                    </div>
                    <div class="imgBox">
                        <img src="favicon.png" class="Starbucks" />
                    </div>
                </div>
            </section>
        ];
    }
}