import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Checkout from '../Checkout';
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
const Cart = () => {
   const [procedBol, setProcedBol] = useState(false);
   // const [input, setInput] = useState('');

   const cart = useSelector(state => {
      return state.product.cart;
   });

   const dispatch = useDispatch();

   let total = 0;
   for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].count;
   }

   const handleProced = bol => {
      setProcedBol(bol);
   };

   const [modalIsOpen, setIsOpen] = useState(false);
   function openModal() {
      setIsOpen(true);
   }

   function closeModal() {
      setIsOpen(false);
   }
   return (
      <div>
         <h1>Cart</h1>
         {cart.map(p => (
            <div>
               <h5>
                  {p.title}{' '}
                  <Button
                     variant="danger"
                     onClick={() => dispatch(removeFromCart(p))}
                  >
                     Remove
                  </Button>{' '}
               </h5>
               <p>
                  ${p.price} x {p.count}{' '}
               </p>
            </div>
         ))}
         <Button onClick={() => handleProced(!false)}>Proced</Button>
         {cart.length > 0 && <h2>Total :$ {total}</h2>}

         {procedBol && (
            <Fade right cascade>
               <div>
                  <Form>
                     <label>Email</label>
                     <input name="email" type="email" required></input>
                     <label>Name</label>
                     <input name="name" type="text" required></input>
                     <label>Address</label>
                     <input name="address" type="text" required></input>

                     <Button
                        onClick={() => openModal()}
                        className="button primary"
                     >
                        Checkout
                     </Button>
                  </Form>
               </div>
            </Fade>
         )}

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

export default Cart;
