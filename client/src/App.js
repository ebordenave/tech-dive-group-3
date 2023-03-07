// Importing necessary modules
import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom'; // Outlet component is imported from react-router-dom
import NavBar from './components/NavBar'; // NavBar2 component is imported from './components/NavBar2'
import ExamCreate from './routes/ExamCreate'; // ExamCreate component is imported from './routes/ExamCreate'

function App() {
  // App component function
  return (
    <>
      {/* Rendering the NavBar2 component */}
      <NavBar/>
      {/* Div element with id "detail" that contains the Outlet component */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

// Exporting the App component as default
export default App;
