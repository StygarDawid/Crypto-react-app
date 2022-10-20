import React from 'react';
import {FaSearchDollar} from "react-icons/fa";
import './Navbar.scss'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaSearchDollar className='icon' />
                <h1> Crypto <span className='main-color'>Look</span></h1>
            </div>
        </Link>
    )
};

export default Navbar;