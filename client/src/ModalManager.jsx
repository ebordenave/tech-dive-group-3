import React from 'react'

import CreateModal from './components/CreateModal';
import GetModal from './components/GetModal';
import EditModal from './components/EditModal';
import DeleteModal from './components/DeleteModal';


const ModalManager = ({ closeFn = () => null, modal = '' }) => {
  return (
    <>
      <CreateModal closeFn={closeFn} open={modal === 'modal-add'} />
      <GetModal closeFn={closeFn} open={modal === 'modal-get'} />
      <EditModal closeFn={closeFn} open={modal === 'modal-edit'} />
      <DeleteModal closeFn={closeFn} open={modal === 'modal-delete'} />
    </>
  );
};

export default ModalManager;