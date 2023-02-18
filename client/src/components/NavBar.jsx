import React from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
    render() {
        return [
            <nav>
                <h2>Title</h2>
                <ul>
                    <Link to={`non`}>Exams</Link>
                    <Link to={`admin`}>Admin</Link>
                </ul>
            </nav>
        ];
    }
}