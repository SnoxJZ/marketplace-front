import React from 'react';
import "./MarketplaceItems.css"
import productList from "./ProductList";
import Card from "../../Card/Card";

const MarketplaceItems = () => {
    return (
        <div className="marketplace__items">
            {productList.map(item =>
                <Card card={item} key={item.id}/>
            )}
        </div>
    );
};

export default MarketplaceItems;