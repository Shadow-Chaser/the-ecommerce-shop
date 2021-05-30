import React from 'react';
import Modal from 'react-modal';
import Zoom from "react-reveal/Zoom";
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')
const ProductForm = ({ modalIsOpen, closeModal, product }) => {
    const {title, price, description, image} = product;

    const dispatch = useDispatch();

    return (
        <div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            style={{width:"80%"}}
        >
            <Zoom>
                <button className="close-modal" onClick={closeModal}>
                    x
              </button>
              <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={image} style={{width:"100%"}} alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h4 class="card-title">{title}</h4>
                                <p class="card-text">{description}</p>
                                <p class="card-text">${price}</p>
                                    <Link onClick={() => dispatch(addToCart(product))} class="btn btn-danger" >Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </Modal>
        </div>
    );
};

export default ProductForm;