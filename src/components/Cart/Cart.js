import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';
import { Link } from 'react-router-dom';

const Cart = () => {
   const dispatch = useDispatch();
   const cart = useSelector(state => {
      return state.product.cart;
   });
   let total = 0;
   for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].count;
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
         {cart.length > 0 && <h2>Total :$ {total}</h2>}
      </div>
   );
};

export default Cart;
