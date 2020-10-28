import React from 'react';
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import './ShopPage.scss'
import SHOP_DATA from '../../data/shop.data'

const ShopPage = () => {
    return (
            <div className="shop-page">
                <Header/>
                <div className="shop-column">
                    {
                        SHOP_DATA.map((category, i) => (
                            <div key={i} className="shop-row">
                                <h1>{category.title}</h1>
                                <div className="shop-category-offers">
                                    {
                                        category.items.map((offer, i) => {
                                            return  i < 4 ? <Product key={i} offer={offer}/> : null
                                        })
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    )
}

export default ShopPage
