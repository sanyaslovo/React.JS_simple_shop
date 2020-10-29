import React from 'react';
import Header from '../../components/Header/Header';
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu';
import { SECTIONS_DATA } from '../../data/sections.data';

const HomePage = () => {
    return (
        <>
            <Header />
            <CategoryMenu categories={SECTIONS_DATA} />
        </>
    )
};

export default HomePage;
