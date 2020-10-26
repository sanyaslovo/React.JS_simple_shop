import React from 'react';
import './CategoryMenu.scss';
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryMenu = ({ categories }) => {
    return (
        <div className="directory-menu">
            {categories.map((category) => (
                <CategoryItem
                    key={category.id}
                    title={category.title}
                    imageUrl={category.imageUrl}
                    linkUrl={category.linkUrl}
                    size={category.size}
                />
            ))}
        </div>
    )
};

export default CategoryMenu;
