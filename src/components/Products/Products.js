import React, { useState } from 'react';
import products from '../../fakeData/productData.json'
import './Product.css'
import ProductList from '../ProductList/ProductList';
import { useSelector } from 'react-redux';
const Products = () => {

    const products = useSelector((state) => {
        return state.product.products;
    })

    return (
        <div class="row mt-3">
            {
                products.map(product =><ProductList product={product}></ProductList>)
            }

        </div>
                );
};

export default Products;