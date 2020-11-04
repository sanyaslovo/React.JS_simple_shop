import React from 'react';
import {connect, useDispatch} from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import './Product.scss'

const Product = ({ offer }) => {
    const img = { backgroundImage: 'url(' + offer.imageUrl + ')' }
    const dispatch = useDispatch();
    const addItem = (offer) => dispatch(addItemToCart(offer));
    const addItemHandleClick = (offer) => {
        offer.quantity = 1;
        addItem(offer);
    }
    return (
        <div className="product">
            <div className="background-image" style={img}/>
            <div className="info">
                <span className="title">{offer.name}</span>
                <span className="price">{offer.price + "$"}</span>
            </div>
            <button className='to-cart' onClick={() => addItemHandleClick(offer)}>ADD TO CART</button>

        </div>
    )
}
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Product)
