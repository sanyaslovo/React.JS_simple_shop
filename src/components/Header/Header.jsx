import React from 'react';
import Logo from '../../assets/crown.svg';
import ShopingBag from '../../assets/shopping-bag.svg';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <a href="!#" className="logo-container">
                <img src={Logo} alt="Logo"/>
            </a>
            <div className="options">
                <a href="!#" className="option">SHOP</a>
                <a href="!#" className="option">CONTACT</a>
                <a href="!#" className="option">SIGN IN</a>
                <div className="cart">
                    <img src={ShopingBag} alt="Logo"/>
                    <span>0</span>
                </div>
            </div>
        </header>
    )
};

export default Header;
