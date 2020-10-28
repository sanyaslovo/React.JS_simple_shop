import React from 'react';
import './CategoryItem.scss';
import {Link} from "react-router-dom";

const CategoryItem = ({ title, imageUrl, linkUrl, size }) => {
    const img = {
        backgroundImage: 'url(' + imageUrl + ')'
    }
    const classItemSize = size ? 'itemCategory ' + size : 'itemCategory';
    const link = `/shop/${linkUrl}`
    return (
        <Link
            to={link}
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
        </Link>
    )
};

export default CategoryItem;
