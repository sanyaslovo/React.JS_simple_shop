import React from 'react';
import './CategoryItem.scss';

const CategoryItem = ({ title, imageUrl, linkUrl, size }) => {
    const img = {
        backgroundImage: 'url(' + imageUrl + ')'
    }
    const classItemSize = size ? 'itemCategory ' + size : 'itemCategory'
    return (
        <a
            href={linkUrl}
            className={classItemSize}
        >
            <div
                className="backgroundImg"
                style={img}>
            </div>
            <div className="category-content">
                <span className="category-title">{title}</span>
                <span className="category-action">SHOP NOW</span>
            </div>
        </a>
    )
};

export default CategoryItem;
