import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Cart = () => {
   const [procedBol, setProcedBol] = useState(false);

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
               <Button onClick={() => handleProced(!false)}>Proced</Button>
            </div>
         ))}

         {cart.length > 0 && <h2>Total :$ {total}</h2>}

          {procedBol && (
                <Fade right cascade>
                  <div>
                      <Form> <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
      
                          ></input>

                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            required
 
                          ></input>
                          <label>Address</label>
                          <input
                            name="address"
                            type="text"
                            required

                          ></input>
                          <Button className="button primary" type="submit">
                            Checkout
                          </Button></Form>
     
                  </div>
                </Fade>
              )}
            </div>
          )}
      </div>
   );
};

export default Cart;
