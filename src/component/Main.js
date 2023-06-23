import React from 'react';
import ClientsBar from './ClientsBar';
import ClientsReview from './ClientsReview';
import Cover from './Cover';
import JoinUs from './JoinUs';
import Products from './Products';
import Productspage from './Productspage/Productspage';
import WhyUs from './WhyUs';

const Main = () => {
    return (
        <div>
            
            <Cover></Cover>
            <ClientsBar></ClientsBar>
            <WhyUs></WhyUs>
            <Products></Products>
            <Productspage></Productspage>
            <JoinUs></JoinUs>
            <ClientsReview></ClientsReview>
            
            
            
            
        </div>
    );
};

export default Main;