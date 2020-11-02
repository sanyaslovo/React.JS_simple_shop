import React from 'react';
import Logo from '../../assets/crown.svg';
import ShoppingBag from '../../assets/shopping-bag.svg';
import './Header.scss';
import {Link} from "react-router-dom";

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
                <div className="cart">
                    <img src={ShoppingBag} alt="Logo"/>
                    <span>0</span>
                </div>
            </div>
        </header>
    )
};

export default Header;
