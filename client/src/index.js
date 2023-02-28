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

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "non",
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
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
