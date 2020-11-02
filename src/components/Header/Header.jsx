import React from 'react';
import Logo from '../../assets/crown.svg';
import './Header.scss';
import {Link} from "react-router-dom";
import Cart from "../Cart/Cart";

const Header = () => {
    return (
        <header>

            <Link to="/" className="logo-container">
                <img src={Logo} alt="Logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/contact" className="option">CONTACT</Link>
                <Link to="/sign-in" className="option">SIGN IN</Link>
                <Cart />
            </div>
        </header>
    )
};

export default Header;
