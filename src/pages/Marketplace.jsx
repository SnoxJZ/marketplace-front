import React from 'react';
import MarketplaceFilter from "../components/Marketplace/MarketplaceFilter/MarketplaceFilter";
import MarketplaceItems from "../components/Marketplace/MarketplaceItems/MarketplaceItems";

const Marketplace = () => {
    return (
        <div className="marketplace">
            <MarketplaceFilter />
            <MarketplaceItems />
        </div>
    );
};

export default Marketplace;