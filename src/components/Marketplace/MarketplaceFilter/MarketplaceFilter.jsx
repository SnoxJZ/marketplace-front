import React from 'react';
import "./MarketplaceFilter.css"

const MarketplaceFilter = () => {
    return (
        <div className="marketplace__filter">
            <h1 className="filter__title">Filter</h1>
            <div className="filters__list">
                <div className="product__filter">
                    <h1 className="filter__name">Product</h1>
                </div>
                <div className="type__filter">
                    <h1 className="filter__name">Type</h1>

                </div>
                <div className="sort__filter">
                    <h1 className="filter__name">Sort by</h1>

                </div>
                <div className="model__filter">
                    <h1 className="filter__name">Model</h1>

                </div>
            </div>
            <div className="category__filter">

            </div>
            <div className="filter__btns">

            </div>
        </div>
    );
};

export default MarketplaceFilter;