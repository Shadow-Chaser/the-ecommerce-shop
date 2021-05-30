import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartAction';
import ProductForm from '../ProductForm/ProductForm';

const ProductList = ({ product }) => {
    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div class="col-md-6 col-sm-12 col-lg-4 mb-3">
            <div class="card h-100" >
                <img onClick={() => openModal()} src={product.image} style={{ height: "300px" }} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between">
                    <h5><strong>${product.price}</strong></h5>
                    <Link onClick={() => dispatch(addToCart(product))} className="btn btn-danger">Add To Cart</Link>
                </div>
            </div>
            <ProductForm modalIsOpen={modalIsOpen} product={product} closeModal={closeModal}></ProductForm>
        </div>
    );
};

export default ProductList;