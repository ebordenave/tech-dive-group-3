import React, { useState } from 'react';
import './App.css';
import { useApi } from './hooks/use-api';

import { Outlet, redirect } from "react-router-dom";
import NavBar2 from './components/NavBar2';
import ModalManager from './ModalManager';

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
    <NavBar2 />
    <div id="detail" onClick={openModal}>
      <ModalManager closeFn={closeModal} modal={modalOpen} />
      <Outlet/>
    </div>
  </>
  );
}

export default App;
