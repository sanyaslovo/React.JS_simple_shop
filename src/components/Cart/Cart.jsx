import React, { useState } from 'react';
import ShoppingBag from '../../assets/shopping-bag.svg';
import './Cart.scss';
import { Link } from "react-router-dom";

const Cart = () => {
    const [ openCart, setOpenCart ] = useState(false);
    const test = [
    {
        Product: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        Description: 'Yellow Track Suit\n',
        Quantity: '2',
        Price: '135'
    },
    {
        Product: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        Description: 'Yellow Track Suit\n',
        Quantity: '2',
        Price: '135'
    }
    ]
    const cartOpenToggle = () => {
        setOpenCart(!openCart)
    }
    return (
        <>
            <div className="cart" onClick={cartOpenToggle}>
                <img src={ShoppingBag} alt="Logo"/>
                <span>{test.length}</span>
            </div>
            {
                openCart
                ? (
                    <div className="cart-list">
                        <ul>
                            {test.map((product, key) => (
                                <li key={key}  className="cart-item">
                                    <img src={product.Product} alt={product.Description} />
                                    <div  className="cart-item-info">
                                        <span>{product.Description}</span>
                                        <span>{`${product.Quantity} x $${product.Price}`}</span>
                                    </div>
                                    </li>
                            ))}
                        </ul>
                        <Link to="checkout" className="btn">go to checkout</Link>
                    </div>
                ) : null
            }
        </>
    )
};

export default Cart;
