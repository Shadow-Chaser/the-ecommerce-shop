import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='py-3 border-bottom bg-light '>
        <div className='container d-flex justify-content-between align-items-center'>
          <Link className='h5 text-dark text-decoration-none' title="dummyName" to='/'>
            e<strong className='text-primary'>Commerce</strong>
          </Link>
              <button
                className='btn btn-sm ms-2 btn-outline-dark'
              >
                Login
              </button>
        </div>
      </div>
    );
};

export default Header;