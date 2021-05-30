import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Filter from '../Filter/Filter';
import Products from '../Products/Products';

const Home = () => {
    const [category, setCategory] = useState([])
    const handleChange = (e) =>{
        setCategory(e.target.value)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 my-2">
                    <Filter handleChange={handleChange}></Filter>
                    <Products category={category}></Products>
                </div>
                <div className="col-md-3">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;