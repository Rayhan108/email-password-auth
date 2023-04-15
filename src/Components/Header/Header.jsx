import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div  className='bg-gray-300 flex justify-between p-5 mb-10'>
            <div>
                <h1 className='text-3xl font-bold'>Form</h1>
            </div>
          <div className='text-2xl font-bold '>
          <Link className='mr-5 hover:bg-gray-100' to="/">Home</Link>
            <Link className='mr-5 hover:bg-gray-100' to="/login">Login</Link>
            <Link className='mr-5 hover:bg-gray-100' to="/register">Register</Link>
          </div>
        </div>
    );
};

export default Header;