import React, { useState } from 'react';
import './App.css';
import { useApi } from './hooks/use-api';

import { Outlet, redirect } from "react-router-dom";
import NavBar from './components/NavBar';
import ModalManager from './components/ModalManager';

function App() {
  const { response } = useApi();
  
  const [modalOpen, setModal] = useState(false)

  const openModal = event => {
    event.preventDefault()
    const { target: { dataset: { modal }}} = event
    if (modal) setModal(modal)
  }

  const closeModal = () => {
    setModal('')
  }

  return (
    <>
    <NavBar />
    <div id="detail">
      <Outlet />
      <ModalManager closeFn={closeModal} modal={modalOpen} />
    </div>
  </>
  );
}

export default App;
