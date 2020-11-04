import React from 'react';
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import './ShopPage.scss'
import SHOP_DATA from '../../data/shop.data'
import { useHistory } from "react-router";

const ShopPage = () => {
    const history = useHistory();
    return (
            <div className="shop-page">
                <Header/>
                <div className="shop-column">
                    {
                        SHOP_DATA.map((category, i) => (
                            <div key={i} className="shop-row">
                                <h1 onClick={() => history.push(`/shop/${category.routeName}`)}>{category.title}</h1>
                                <div className="shop-category-offers">
                                    {
                                        category.items.slice(0, 4).map((offer, i) => <Product key={i} offer={offer}/>)
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
