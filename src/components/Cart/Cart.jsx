import React, { useState } from 'react';
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import ShoppingBag from '../../assets/shopping-bag.svg';
import './Cart.scss';
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
    const [ openCart, setOpenCart ] = useState(true);
    localStorage.setItem('ItemsInCart', JSON.stringify(cartItems));
    const productsInCart = JSON.parse(localStorage.getItem ('ItemsInCart'));
    return (
        <>
            <div className="cart" onClick={() => setOpenCart(!openCart)}>
                <img src={ShoppingBag} alt="Logo"/>
                <span>{ cartItems.reduce((ac, el) => ac + el.quantity, 0) }</span>
            </div>
            {
                openCart
                ? (
                    <div className="cart-list">

                            {
                                productsInCart.length === 0
                                ? <span className="empty">Your cart is empty</span>
                                : (
                                        <ul>
                                            {cartItems.map((product, index) => (
                                                <li key={index} className="cart-item">
                                                    <img src={product.imageUrl} alt={product.name}/>
                                                    <div className="cart-item-info">
                                                        <span>{product.name}</span>
                                                        <span>{`${product.quantity} x $${product.price}`}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                )

                            }

                        <Link to="/checkout" className="btn">go to checkout</Link>
                    </div>
                ) : []
            }
        </>
    )
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);
