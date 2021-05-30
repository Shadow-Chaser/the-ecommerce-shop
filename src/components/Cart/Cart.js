import { Button } from 'react-bootstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Cart = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => {
        return state.product.cart;
    })

    let total = 0
    for (let i = 0; i < cart.length; i++) {
        total += (cart[i].price * cart[i].count)
        var roundTotal = Math.round(total)
    }

    const handleClick = () =>{
        console.log("clicked")
    }
    return (
        <div>
            <h1>Cart</h1>
            {
                cart.map(p => <div>

                    <h5>{p.title}</h5>
                    <p className="d-flex justify-content-between align-items-center">${p.price} x {p.count} <Button variant='danger' onClick={() => dispatch(removeFromCart(p))}>Remove</Button> </p>
                    <hr />
                </div>)
            }
                
            {cart.length > 0 && <h5 className="d-flex justify-content-between align-items-center">Total: ${roundTotal} <button onClick={handleClick} className="btn btn-primary">Proceed</button>
</h5>}

            
        </div>
    );
};

export default Cart;