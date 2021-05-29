import React, { useState } from 'react';
import products from '../../fakeData/productData.json'
import './Product.css'
import ProductList from '../ProductList/ProductList';
const Products = () => {
    return (
        <div class="row mt-3">
            {
                products.map(product =>
                  <ProductList product={product}></ProductList>
                )
            }

        </div>
                );
};

export default Products;