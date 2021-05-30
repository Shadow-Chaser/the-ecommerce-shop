import React from 'react';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';

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

Modal.setAppElement('#root');

const Checkout = ({ modalIsOpen, closeModal }) => {
   return (
      <div>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            style={{ width: '80%' }}
         >
            <Zoom>
               <h1>Your order has been placed successfuly</h1>
            </Zoom>
         </Modal>
      </div>
   );
};

export default Checkout;
