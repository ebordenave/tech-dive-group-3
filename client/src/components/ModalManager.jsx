import React from 'react'

import CreateModal from './CreateModal';
import GetModal from './GetModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';


const ModalManager = ({
  closeFn = () => null,
  modal = ''
}) => (
  <>
      <CreateModal closeFn = {closeFn} open = {modal === 'modal-add'}/>
      <GetModal closeFn = {closeFn} open = {modal === 'modal-get'}/>
      <EditModal closeFn = {closeFn} open = {modal === 'modal-edit'}/>
      <DeleteModal closeFn = {closeFn} open = {modal === 'modal-delete'}/>
  </>
);

export default ModalManager;