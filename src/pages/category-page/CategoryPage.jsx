import React from 'react';
import Header from "../../components/Header/Header";
import Product from '../../components/Product/Product'
import SHOP_DATA from '../../data/shop.data'
import './CategoryPage.scss'

const CategoryPage = ({ match }) => {
    const categoryUrl = match.params.category
    const data = SHOP_DATA.find(item => categoryUrl === item.routeName)
    return (
        <div className="category-page">
            <Header/>
            <h2>{data.title}</h2>
            <div className="wrapper">
                { data.items.map(offer => <Product key={offer.id} offer={offer} />) }
            </div>
        </div>
    )
}

export default CategoryPage
