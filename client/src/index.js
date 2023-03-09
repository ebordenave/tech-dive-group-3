// Import necessary packages and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';
import AdminPage from './routes/AdminPage';
import ExamsPage from './routes/ExamsPage';
import ExamDetails from './routes/ExamDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import { redirect } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExamCreate from './routes/ExamCreate';
import ExamForm from './components/ExamForm';
import PatientDetails from './components/PatientDetails';
import LandingPage from './routes/LandingPage';

// Create a browser router instance with the specified routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "exams",
        element: <ExamsPage/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "admin",
        element: <AdminPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "exam",
        element: <ExamDetails />,
        errorElement: <ErrorPage/>,
      },
      {
        path: "exam-form",
        element: <ExamCreate/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "patient",
        element: <PatientDetails />,
        errorElement: <ErrorPage/>,
      }
    ]
  },
]);

// Render the root component of the application with the router wrapped in a RouterProvider component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Call the reportWebVitals function to start measuring performance in the app
// Pass a function to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
 