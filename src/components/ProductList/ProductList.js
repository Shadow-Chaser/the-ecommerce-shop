import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductForm from '../ProductForm/ProductForm';

const ProductList = ({product}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div class="col-md-6 col-sm-12 col-lg-4 mb-3">
        <div class="card h-100" onClick={()=> openModal()}>
            <img src={product.image} style={{height:"300px"}} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <h5><strong>$120</strong></h5>
                <Link className="btn btn-danger">Add To Cart</Link>
            </div>
        </div>
        <ProductForm modalIsOpen={modalIsOpen} product={product} closeModal={closeModal}></ProductForm>
        </div>
    );
};

export default ProductList;