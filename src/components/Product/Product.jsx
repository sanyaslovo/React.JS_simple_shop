import React from 'react';
import './Product.scss'

const Product = ({offer}) => {
    const img = {
        backgroundImage: 'url(' + offer.imageUrl + ')'
    }
    return (
        <div className="product">
            <div className="background-image" style={img}></div>
            <div className="info">
                <span className="title">{offer.name}</span>
                <span className="price">{offer.price + "$"}</span>
            </div>
            <button className='to-cart'>ADD TO CART</button>

        </div>
    )
}

export default Product
