import React from 'react';
import './Filter.css';

const Filter = ({handleChange}) => {
   
    return (
        <div className="filter d-flex justify-content-around">
            <div className="filter-result">
                {/* {this.props.filteredProducts.length} */}
           Products
            </div>
            <div className="filter-sort">
                Order{" "}
                <select onChange={(e)=>handleChange(e)}>
                    <option value="Men's Clothing">Men's Clothing</option>
                    <option value="Jewelry">Jewelry</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Women's Clothing">Women's Clothing</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;