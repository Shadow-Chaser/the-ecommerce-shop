import React from 'react';
import Cart from '../Cart/Cart';
import Filter from '../Filter/Filter';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 my-2">
                    <Filter></Filter>
                    <Products></Products>
                </div>
                <div className="col-md-3">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;