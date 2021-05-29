import React from 'react';
import './Filter.css';

const Filter = () => {
    return (
        <div className="filter d-flex justify-content-around">
            <div className="filter-result">
                {/* {this.props.filteredProducts.length} */}
           Products
            </div>
            <div className="filter-sort">
                Order{" "}
                <select
                // value={this.props.sort}
                // onChange={(e) =>
                //   this.props.sortProducts(
                //     this.props.filteredProducts,
                //     e.target.value
                //   )
                // }
                >
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                Filter{" "}
                <select
                // value={this.props.size}
                // onChange={(e) =>
                //   this.props.filterProducts(this.props.products, e.target.value)
                // }
                >
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;