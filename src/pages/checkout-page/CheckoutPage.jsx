import React from "react";
import Header from "../../components/Header/Header";
import {connect, useDispatch} from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { removeItemFromCart, descreaseItem, increaseItem } from "../../redux/cart/cart.actions";
import './CheckoutPage.scss'


const CheckoutPage = ({ cartItems }) => {
    const products = cartItems || []
    const dispatch = useDispatch();
    const removeItem = (id) => dispatch(removeItemFromCart(id));
    const descrease = (id) => dispatch(descreaseItem(id))
    const increase = (id) => dispatch(increaseItem(id))
    return (
        <>
            <Header />
            <div className="checkout">
                <div className="caption">
                    <div className="caption-column"><span>Product</span></div>
                    <div className="caption-column"><span>Description</span></div>
                    <div className="caption-column"><span>Quantity</span></div>
                    <div className="caption-column"><span>Price</span></div>
                    <div className="caption-column"><span>Remove</span></div>
                </div>
                {products.length !== 0 ?
                    products.map((product, index) => (
                    <div className="row-product" key={index}>
                        <div className="img-product"><img src={product.imageUrl} alt="item"/></div>
                        <span className="title-product">{product.name}</span>
                        <span className="quantity-product">
                            <div onClick={() => descrease(product.id)}>❮</div>
                            <span>{ product.quantity }</span>
                            <div onClick={() => increase(product.id)}>❯</div>
                        </span>
                        <span className="price-product">{product.price}</span>
                        <div className="remove-product" onClick={() => removeItem(product.id)}>✕</div>
                    </div>
                ))
                :
                null}
                <div className="total">
                    TOTAL: $
                    { cartItems.reduce((ac, el) => ac + el.quantity * el.price, 0) }
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CheckoutPage);