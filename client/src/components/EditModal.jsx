import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement(document.createElement('div'));

const EditModal = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal 
      isOpen={open}
      onRequestClose={closeFn}
    >
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>Modal Edit</h1>
          </header>
          <div className="modal--body">
            <p>Modal One content will be rendered here.</p>
          </div>
          <footer className="modal--footer">
            <button type="button" onClick={closeFn}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;