import React from 'react';
import MarketplaceFilter from "../components/Marketplace/MarketplaceFilter/MarketplaceFilter";
import MarketplaceItems from "../components/Marketplace/MarketplaceItems/MarketplaceItems";
import { FilterProvider } from '../context/FilterContext';

const Marketplace = () => {
    return (
        <div className="marketplace">
            <FilterProvider>
                <MarketplaceFilter />
                <MarketplaceItems />
            </FilterProvider>
        </div>
    );
};

export default Marketplace;