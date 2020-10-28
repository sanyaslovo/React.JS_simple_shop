import React from 'react';
import './Menu.scss';
import Cart from '../Cart/Cart'
import {
    Link
} from "react-router-dom";

const Menu = () => {
    return (
            <div className="options">
                <Link to="shop" className="option">SHOP</Link>
                <Link to="contact" className="option">CONTACT</Link>
                <Link to="sign-in" className="option">SIGN IN</Link>
                <Cart />
            </div>
    )
};

export default Menu;
